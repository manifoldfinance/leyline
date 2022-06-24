/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OpenMevLibrary,
  OpenMevLibraryInterface,
} from "../../../contracts/libraries/OpenMevLibrary";

const _abi = [
  {
    inputs: [],
    name: "IdenticalAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidity",
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
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAmount",
    type: "error",
  },
];

const _bytecode =
  "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080d000a";

type OpenMevLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OpenMevLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OpenMevLibrary__factory extends ContractFactory {
  constructor(...args: OpenMevLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OpenMevLibrary> {
    return super.deploy(overrides || {}) as Promise<OpenMevLibrary>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OpenMevLibrary {
    return super.attach(address) as OpenMevLibrary;
  }
  override connect(signer: Signer): OpenMevLibrary__factory {
    return super.connect(signer) as OpenMevLibrary__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OpenMevLibraryInterface {
    return new utils.Interface(_abi) as OpenMevLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OpenMevLibrary {
    return new Contract(address, _abi, signerOrProvider) as OpenMevLibrary;
  }
}