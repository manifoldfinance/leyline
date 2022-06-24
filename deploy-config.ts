import { ethers } from 'ethers'
import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  secureRpcContractAddress: '',
  create2codehash: '',
  genesisOutput: ethers.constants.HashZero,
  historicalBlocks: 0,
  startingBlockTimestamp:
  // @ts-ignore
    parseInt(process.env.SUSHI_STARTING_BLOCK_TIMESTAMP, 10) || Date.now(),
  sushifactoryAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  aaveAddress: '',
  sushiMultiSigAddress: '',
  sushiBentoBoxAddress: '',
  sushi_init_hash: '',
  weth09Address: '',
  manifoldEoaAddress: '',
}

export default config