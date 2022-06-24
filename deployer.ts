  const { deployer } = await hre.getNamedAccounts()

  if (
    typeof hre.deployConfig.startingBlockTimestamp !== 'number' ||
    isNaN(hre.deployConfig.startingBlockTimestamp)
  ) {
    throw new Error(
      'Cannot deploy SushiGuardRouterV01 without specifying a valid minimum startingBlockTimestamp.'
    )
  }

  await deploy('SushiGuardRouterV01', {
    from: deployer,
    args: [
      hre.deployConfig.submissionInterval,
      hre.deployConfig.l2BlockTime,
      hre.deployConfig.genesisOutput,
      hre.deployConfig.historicalBlocks,
      hre.deployConfig.startingBlockTimestamp,
      hre.deployConfig.sushifactoryAddress,
      hre.deployConfig.secureRpcContractAddress,
      hre.deployConfig.create2codehash,
      hre.deployConfig.aaveAddress,
      hre.deployConfig.sushiMultiSigAddress,
      hre.deployConfig.sushiBentoBoxAddress,
      hre.deployConfig.sushi_init_hash,
      hre.deployConfig.weth09Address,
      hre.deployConfig.manifoldEoaAddress,
    ],
    log: true,
    waitConfirmations: 1,
  })
};

deployFn.tags = ['SushiGuardRouterV01']
export default deployFn