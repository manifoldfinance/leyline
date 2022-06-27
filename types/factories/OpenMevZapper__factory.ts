/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OpenMevZapper, OpenMevZapperInterface } from "../OpenMevZapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IdenticalAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientOutputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPath",
    type: "error",
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IOpenMevRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
    ],
    name: "swapAndStakeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
    ],
    name: "swapETHAndStakeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pairAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "desiredToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "desiredTokenOutMin",
        type: "uint256",
      },
    ],
    name: "withdrawLiquidityAndSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001e7c38038062001e7c833981016040819052620000349162000080565b6001600160a01b0316608052620000ad565b60006001600160a01b0382165b92915050565b620000648162000046565b81146200007057600080fd5b50565b8051620000538162000059565b600060208284031215620000975762000097600080fd5b6000620000a5848462000073565b949350505050565b608051611d8a620000f26000396000818160ed01528181610387015281816103c3015281816107390152818161077501528181610b670152610ceb0152611d8a6000f3fe6080604052600436106100435760003560e01c806364551df314610072578063942f0c27146100a8578063ef409f90146100bb578063f887ea40146100db57600080fd5b3661006d573373c02aaa39b223fe8d0a0e5c4f27ead9083c756cc21461006b5761006b6116f4565b005b600080fd5b34801561007e57600080fd5b5061009261008d36600461174e565b61011c565b60405161009f91906117ba565b60405180910390f35b6100926100b63660046117c8565b6104f9565b3480156100c757600080fd5b506100926100d6366004611805565b6108aa565b3480156100e757600080fd5b5061010f7f000000000000000000000000000000000000000000000000000000000000000081565b60405161009f919061186b565b60006107d083101561014157604051638dc525d160e01b815260040160405180910390fd5b604051636eb1769f60e11b815283906001600160a01b0387169063dd62ed3e906101719033903090600401611882565b602060405180830381865afa15801561018e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b291906118af565b10156101d1576040516313be252b60e01b815260040160405180910390fd5b60006101f273c0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac8787610dfa565b9050600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610235573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102599190611910565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150600080886001600160a01b03168a6001600160a01b031610156102b9576102a58885610e22565b91506102b2828585610e86565b90506102d3565b6102c38884610e22565b91506102d0828486610e86565b90505b868110156102f4576040516342301c2360e01b815260040160405180910390fd5b6040805160028082526060820183526000926020830190803683370190505090508a8160008151811061032957610329611976565b60200260200101906001600160a01b031690816001600160a01b031681525050898160018151811061035d5761035d611976565b6001600160a01b039283166020918202929092010152610381908c1633308c610f7c565b6103ac8b7f000000000000000000000000000000000000000000000000000000000000000085611001565b6040516338ed173960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906338ed17399061040090869086908690309042906004016119e9565b6000604051808303816000875af115801561041f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104479190810190611b1e565b5061046786610456858c611b6f565b6001600160a01b038e169190611097565b61047b6001600160a01b038b168784611097565b6040516335313c2160e11b81526001600160a01b03871690636a627842906104a7903390600401611b86565b6020604051808303816000875af11580156104c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ea91906118af565b9b9a5050505050505050505050565b600073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26107d034101561053357604051638dc525d160e01b815260040160405180910390fd5b600061055473c0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac8387610dfa565b9050600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610597573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bb9190611910565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150600080886001600160a01b0316866001600160a01b0316101561061b576106073485610e22565b9150610614828585610e86565b9050610635565b6106253484610e22565b9150610632828486610e86565b90505b87811015610656576040516342301c2360e01b815260040160405180910390fd5b604080516002808252606082018352600092602083019080368337019050509050868160008151811061068b5761068b611976565b60200260200101906001600160a01b031690816001600160a01b03168152505089816001815181106106bf576106bf611976565b60200260200101906001600160a01b031690816001600160a01b031681525050866001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561071a57600080fd5b505af115801561072e573d6000803e3d6000fd5b505050505061075e877f000000000000000000000000000000000000000000000000000000000000000085611001565b6040516338ed173960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906338ed1739906107b290869086908690309042906004016119e9565b6000604051808303816000875af11580156107d1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107f99190810190611b1e565b50610819866108088534611b6f565b6001600160a01b038a169190611097565b61082d6001600160a01b038b168784611097565b6040516335313c2160e11b81526001600160a01b03871690636a62784290610859903390600401611b86565b6020604051808303816000875af1158015610878573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089c91906118af565b9a9950505050505050505050565b6000808590506000816001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109149190611b9f565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610956573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097a9190611b9f565b9050856001600160a01b0316826001600160a01b0316141580156109b05750856001600160a01b0316816001600160a01b031614155b156109e7576040517f20db826700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051636eb1769f60e11b815287906001600160a01b038a169063dd62ed3e90610a179033903090600401611882565b602060405180830381865afa158015610a34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5891906118af565b1015610a77576040516313be252b60e01b815260040160405180910390fd5b610a8c6001600160a01b03891633308a610f7c565b610a968830611106565b6000866001600160a01b0316826001600160a01b031614610ab75781610ab9565b825b60408051600280825260608201835292935060009290916020830190803683370190505090508181600081518110610af357610af3611976565b60200260200101906001600160a01b031690816001600160a01b0316815250508781600181518110610b2757610b27611976565b60200260200101906001600160a01b031690816001600160a01b031681525050610bf881600081518110610b5d57610b5d611976565b60200260200101517f0000000000000000000000000000000000000000000000000000000000000000846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610bb29190611b86565b602060405180830381865afa158015610bcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf391906118af565b611001565b6040516370a0823160e01b81526000906001600160a01b038a16906370a0823190610c27903090600401611b86565b602060405180830381865afa158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6891906118af565b881115610ce9576040516370a0823160e01b81526001600160a01b038a16906370a0823190610c9b903090600401611b86565b602060405180830381865afa158015610cb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdc91906118af565b610ce69089611b6f565b90505b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166338ed1739846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610d449190611b86565b602060405180830381865afa158015610d61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8591906118af565b838530426040518663ffffffff1660e01b8152600401610da99594939291906119e9565b6000604051808303816000875af1158015610dc8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610df09190810190611b1e565b506104ea8261120f565b6000806000610e098585611463565b91509150610e1886838361151a565b9695505050505050565b60006107ca610e33836107cd611bc0565b610e69610e4385623cda29611bc0565b610e5087623cda20611bc0565b610e5a9190611bdf565b610e649086611bc0565b61155e565b610e739190611b6f565b610e7d9190611c0d565b90505b92915050565b600083610ebf576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e8831080610ed057506103e882105b15610f07576040517fbb55fd2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e58481029083860202818181610f2157610f21611bf7565b048414610f5a576040517f35278d1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e885028201808281610f7057610f70611bf7565b04979650505050505050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080610ffa5760405162461bcd60e51b8152600401610ff190611c58565b60405180910390fd5b5050505050565b604051636eb1769f60e11b81526000906001600160a01b0385169063dd62ed3e906110329030908790600401611882565b602060405180830381865afa15801561104f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107391906118af565b905081811015611091576110916001600160a01b03851684846115be565b50505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806110915760405162461bcd60e51b8152600401610ff190611c9c565b61118882836001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016111369190611b86565b602060405180830381865afa158015611153573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117791906118af565b6001600160a01b0385169190611097565b6040517f89afcb440000000000000000000000000000000000000000000000000000000081526001600160a01b038316906389afcb44906111cd908490600401611b86565b60408051808303816000875af11580156111eb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110919190611cac565b8051600090815b8181101561145c5783818151811061123057611230611976565b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016112639190611b86565b602060405180830381865afa158015611280573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a491906118af565b925082156114545773c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26001600160a01b03168482815181106112dc576112dc611976565b60200260200101516001600160a01b03160361141d576040517f2e1a7d4d00000000000000000000000000000000000000000000000000000000815273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290632e1a7d4d906113429086906004016117ba565b600060405180830381600087803b15801561135c57600080fd5b505af1158015611370573d6000803e3d6000fd5b50506040805160008082526020820192839052935033925086916113949190611d2d565b60006040518083038185875af1925050503d80600081146113d1576040519150601f19603f3d011682016040523d82523d6000602084013e6113d6565b606091505b5090915050801515600003611417576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50611454565b611454338486848151811061143457611434611976565b60200260200101516001600160a01b03166110979092919063ffffffff16565b600101611216565b5050919050565b600080826001600160a01b0316846001600160a01b0316036114b1576040517fbd969eb000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008360601b8560601b10600081146114cf578593508492506114d6565b8493508592505b505081158015611512576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b509250929050565b60008060006115288661162d565b604051606097881b81529590961b6014860152602885209585526015850195909552505050603581019190915260559020919050565b600060038211156115af575080600061157b600183811c90611bdf565b90505b818110156115a9579050806001816115968186611c0d565b6115a09190611bdf565b901c905061157e565b50919050565b81156115b9575060015b919050565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806110915760405162461bcd60e51b8152600401610ff190611d6d565b6000807fffffffffffffffffffffffff3f511b871c9a71d9ef3a085b5d1e8883161b0d546001600160a01b038416016116aa57507fe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c630390507fffc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac0000000000000000000000915091565b507f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f90507fff5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f0000000000000000000000915091565b634e487b7160e01b600052600160045260246000fd5b60006001600160a01b038216610e80565b6117248161170a565b811461172f57600080fd5b50565b8035610e808161171b565b80611724565b8035610e808161173d565b6000806000806080858703121561176757611767600080fd5b60006117738787611732565b945050602061178487828801611732565b935050604061179587828801611743565b92505060606117a687828801611743565b91505092959194509250565b805b82525050565b60208101610e8082846117b2565b600080604083850312156117de576117de600080fd5b60006117ea8585611732565b92505060206117fb85828601611743565b9150509250929050565b6000806000806080858703121561181e5761181e600080fd5b600061182a8787611732565b945050602061183b87828801611743565b935050604061179587828801611732565b6000610e808261170a565b6000610e808261184c565b6117b481611857565b60208101610e808284611862565b6117b48161170a565b604081016118908285611879565b61189d6020830184611879565b9392505050565b8051610e808161173d565b6000602082840312156118c4576118c4600080fd5b60006118d084846118a4565b949350505050565b6dffffffffffffffffffffffffffff8116611724565b8051610e80816118d8565b63ffffffff8116611724565b8051610e80816118f9565b60008060006060848603121561192857611928600080fd5b600061193486866118ee565b9350506020611945868287016118ee565b925050604061195686828701611905565b9150509250925092565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60006119988383611879565b505060200190565b60006119aa825190565b80845260209384019383018060005b838110156119de5781516119cd888261198c565b9750602083019250506001016119b9565b509495945050505050565b60a081016119f782886117b2565b611a0460208301876117b2565b8181036040830152611a1681866119a0565b9050611a256060830185611879565b610e1860808301846117b2565b601f19601f830116810181811067ffffffffffffffff82111715611a5857611a58611960565b6040525050565b6000611a6a60405190565b90506115b98282611a32565b600067ffffffffffffffff821115611a9057611a90611960565b5060209081020190565b6000611aad611aa884611a76565b611a5f565b83815290506020808201908402830185811115611acc57611acc600080fd5b835b81811015611af05780611ae188826118a4565b84525060209283019201611ace565b5050509392505050565b600082601f830112611b0e57611b0e600080fd5b81516118d0848260208601611a9a565b600060208284031215611b3357611b33600080fd5b815167ffffffffffffffff811115611b4d57611b4d600080fd5b6118d084828501611afa565b634e487b7160e01b600052601160045260246000fd5b600082821015611b8157611b81611b59565b500390565b60208101610e808284611879565b8051610e808161171b565b600060208284031215611bb457611bb4600080fd5b60006118d08484611b94565b6000816000190483118215151615611bda57611bda611b59565b500290565b60008219821115611bf257611bf2611b59565b500190565b634e487b7160e01b600052601260045260246000fd5b600082611c1c57611c1c611bf7565b500490565b601481526000602082017f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000815291505b5060200190565b60208082528101610e8081611c21565b600f81526000602082017f5452414e534645525f4641494c4544000000000000000000000000000000000081529150611c51565b60208082528101610e8081611c68565b60008060408385031215611cc257611cc2600080fd5b6000611cce85856118a4565b92505060206117fb858286016118a4565b60005b83811015611cfa578181015183820152602001611ce2565b838111156110915750506000910152565b6000611d15825190565b611d23818560208601611cdf565b9290920192915050565b600061189d8284611d0b565b600e81526000602082017f415050524f56455f4641494c454400000000000000000000000000000000000081529150611c51565b60208082528101610e8081611d3956fea164736f6c634300080f000a";

type OpenMevZapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OpenMevZapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OpenMevZapper__factory extends ContractFactory {
  constructor(...args: OpenMevZapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OpenMevZapper> {
    return super.deploy(_router, overrides || {}) as Promise<OpenMevZapper>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, overrides || {});
  }
  override attach(address: string): OpenMevZapper {
    return super.attach(address) as OpenMevZapper;
  }
  override connect(signer: Signer): OpenMevZapper__factory {
    return super.connect(signer) as OpenMevZapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OpenMevZapperInterface {
    return new utils.Interface(_abi) as OpenMevZapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OpenMevZapper {
    return new Contract(address, _abi, signerOrProvider) as OpenMevZapper;
  }
}