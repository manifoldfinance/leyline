// Available variables:
// - Machine
// - interpret
// - assign
// - send
// - sendParent
// - spawn
// - raise
// - actions
// - XState (all XState exports)

const sendMachineDefaultContext = {
  amount: "",
  contract: "0x0",
  walletAddress: "",
  transactionHash: null,
  tokens: [],
  zkSyncTokens: [],
  zkSyncConfig: null,
}

const sendMaschine = Machine({
  id: "send",
  initial: "readyToPair",
  context: sendMachineDefaultContext,
  states: {
    readyToPair: {
      on: { START_PAIR: "pairing" },
    },
    pairing: {
      invoke: {
        id: "pairing",
        src: async () => {
          
        },
        onDone: "fetchTokens",
        onError: "readyToPair",
      },
    },
    fetchTokens: {
      invoke: {
        id: "fetchTokens",
        src: async () => {
          
        },
        onDone: {
          target: "fetchBalancesAndAllowances",
          actions: assign((_context, event) => {
            const {
              data: { zkSyncTokens, zkSyncConfig },
            } = event
            return { zkSyncTokens, zkSyncConfig }
          }),
        },
        onError: "error",
      },
    },
    fetchBalancesAndAllowances: {
      invoke: {
        id: "fetchBalancesAndAllowances",
        src: async (context) => {
          
        },
        onDone: {
          target: "approve",
          actions: [
            assign((_context, event) => {
              const { data: tokens } = event
              return { tokens }
            }),
            "checkApproveSkip",
          ],
        },
        onError: "error",
      },
    },
    approve: {
      on: {
        SEND_APPROVE: "approving",
        SKIP_APPROVE: "send",
        APPROVE_STAY: "approve",
        CHANGE_TOKENS: { target: "approve", actions: ["setContext"] },
        CHANGE_CONTEXT: {
          target: "approve",
          actions: ["setContext", "checkApproveSkip"],
        },
      },
    },
    approving: {
      entry: "resetTransactionHash",
      invoke: {
        id: "approving",
        src: async (context) => {
          
        },
        onDone: {
          target: "waitForTx",
        },
        onError: [
          {
            target: "approve",
          },
          { target: "error" },
        ],
      },
    },
    waitForTx: {
      entry: "setTransactionHash",
      invoke: {
        id: "waitForTx",
        src: async (_context, event) => {
          
        },
        onDone: [
          {
            target: "fetchBalancesAndAllowances",
          },
          {
            target: "success",
          },
        ],
      },
    },
    send: {
      on: {
        SEND_TRANSACTION: "sending",
        CHANGE_TOKENS: { target: "send", actions: ["setContext"] },
        CHANGE_CONTEXT: {
          target: "approve",
          actions: ["setContext", "checkApproveSkip"],
        },
      },
    },
    sending: {
      entry: "resetTransactionHash",
      invoke: {
        id: "sending",
        src: async (context) => {
          
        },
        onDone: { target: "waitForTx" },
        onError: [
          {
            target: "send",
          },
          { target: "error" },
        ],
      },
    },
    success: {},
    error: {},
  },
})

const fetchMachine = Machine({
  id: "router",
  initial: "loading",
  context: {
    name: "",
    walletAddress: "0x0",
    ens: "",
    walletDeployed: false,
    hasZkSync: false,
  },
  states: {
    loading: {
      entry: ["setName"],
      invoke: {
        id: "getWallet",
        src: async (context) => {
          
        },
        onDone: [
          {
            target: "home",
            actions: ["assignContext", "respectPath"],
          },
          {
            target: "vault",
            actions: "assignContext",
          },
        ],
        onError: [
          {
            target: "claim",
          },
          {
            target: "404",
          },
          {
            target: "error",
          },
        ],
      },
    },
    home: {
      entry: ["navigateHome"],
      on: {
        PUSH_SEND: "send",
        PUSH_VAULT: "vault",
      },
      meta: {
        path: "/",
      },
    },
    vault: {
      entry: ["navigateVault"],
      type: "final",
      meta: {
        path: "/vault",
      },
    },
    claim: {
      entry: ["navigateClaim"],
      type: "final",
      meta: {
        path: "/claim",
      },
    },
    404: {
      entry: ["navigate404"],
      type: "final",
      meta: {
        path: "/404",
      },
    },
    error: {
      type: "final",
    },
    send: {
      entry: ["navigateSend"],
      invoke: {
        id: "sendMachine",
        src: sendMaschine,
        data: (context) => ({
          ...sendMachineDefaultContext,
          walletAddress: context.walletAddress,
        }),
      },
      on: {
        PUSH_HOME: "home",
      },
      meta: {
        path: "/send",
      },
    },
  },
})
