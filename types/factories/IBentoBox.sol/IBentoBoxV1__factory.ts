/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBentoBoxV1,
  IBentoBoxV1Interface,
} from "../../IBentoBox.sol/IBentoBoxV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IFlashBorrower",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totals",
    outputs: [
      {
        internalType: "uint128",
        name: "elastic",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "base",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBentoBoxV1__factory {
  static readonly abi = _abi;
  static createInterface(): IBentoBoxV1Interface {
    return new utils.Interface(_abi) as IBentoBoxV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBentoBoxV1 {
    return new Contract(address, _abi, signerOrProvider) as IBentoBoxV1;
  }
}
