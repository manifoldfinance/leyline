/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestUint512,
  TestUint512Interface,
} from "../../../../contracts/test/Uint512.t.sol/TestUint512";

const _abi = [
  {
    inputs: [],
    name: "echidna_mulUint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    name: "setX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x1",
        type: "uint256",
      },
    ],
    name: "setX1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061013d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634018d9aa146100465780635aef40811461005b578063d340303c14610079575b600080fd5b6100596100543660046100f9565b600055565b005b61006361008c565b6040516100709190610122565b60405180910390f35b6100596100873660046100f9565b600155565b60008060015460005402905060006100a86000546001546100b3565b509190911492915050565b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098385029250828110838203039150509250929050565b80355b92915050565b60006020828403121561010e5761010e600080fd5b600061011a84846100f0565b949350505050565b8115158152602081016100f356fea164736f6c634300080d000a";

type TestUint512ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUint512ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUint512__factory extends ContractFactory {
  constructor(...args: TestUint512ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUint512> {
    return super.deploy(overrides || {}) as Promise<TestUint512>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUint512 {
    return super.attach(address) as TestUint512;
  }
  override connect(signer: Signer): TestUint512__factory {
    return super.connect(signer) as TestUint512__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUint512Interface {
    return new utils.Interface(_abi) as TestUint512Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUint512 {
    return new Contract(address, _abi, signerOrProvider) as TestUint512;
  }
}
