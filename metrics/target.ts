import client, { Gauge, register } from "prom-client";
client.collectDefaultMetrics();

import express from "express";
import fetch from "node-fetch";

let swapETHForExactTokens = new Gauge({
  name: "swapETHForExactTokens",
  help: "swapETHForExactTokens.",
  labelNames: ["id", "symbol"] as const
});
let swapExactETHForTokens = new Gauge({
  name: "swapExactETHForTokens",
  help: "swapExactETHForTokens.",
  labelNames: ["id", "symbol"] as const
});
let swapExactETHForTokensSupportingFeeOnTransferTokens = new Gauge({
  name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
  help: "swapExactETHForTokensSupportingFeeOnTransferTokens.",
  labelNames: ["id", "symbol"] as const
});
let swapExactTokensForETH = new Gauge({
  name: "swapExactTokensForETH",
  help: "swapExactTokensForETH.",
  labelNames: ["id", "symbol"] as const
});
let swapExactTokensForETHSupportingFeeOnTransferTokens = new Gauge({
  name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
  help: "swapExactTokensForETHSupportingFeeOnTransferTokens.",
  labelNames: ["id", "symbol"] as const
});
let swapExactTokensForTokens = new Gauge({
  name: "swapExactTokensForTokens",
  help: "swapExactTokensForTokens.",
  labelNames: ["id", "symbol"] as const
});
let swapExactTokensForTokensSupportingFeeOnTransferTokens = new Gauge({
  name: "swapETHForswapExactTokensForTokensSupportingFeeOnTransferTokensExactTokens",
  help: "swapExactTokensForTokensSupportingFeeOnTransferTokens.",
  labelNames: ["id", "symbol"] as const
});
let swapTokensForExactETH = new Gauge({
  name: "swapTokensForExactETH",
  help: "swapTokensForExactETH.",
  labelNames: ["id", "symbol"] as const
});
let swapTokensForExactTokens = new Gauge({
  name: "swapTokensForExactTokens",
  help: "swapTokensForExactTokens.",
  labelNames: ["id", "symbol"] as const
});



export interface RouterSwap {
  erc20Token: string;

  borrowBalance: number;
  supplyBalance: number;
  liquidity: number;

  MEV: boolean;

  underlyingName: string;
  underlyingSymbol: string;
  underlyingToken: string;
  underlyingDecimals: number;
  underlyingPrice: number;
}

type Task =
  | "rss"
  | "liquidations"
  | "user_leverage"
  | "reserves_fees"
  | "staked_alcx"
  | "borrowers";

let lastRun: { [key in Task]: number } = {
  rss: 0,
  liquidations: 0,
  user_leverage: 0,
  borrowers: 0,
  reserves_fees: 0,
  staked_alcx: 0
};

function runEvery(key: Task, seconds: number, instantLastRunUpdate?: boolean) {
  const ms = seconds * 1000;

  const now = Date.now();

  const msPassed = Date.now() - lastRun[key];

  if (msPassed >= ms) {
    if (instantLastRunUpdate) {
      lastRun[key] = now;
    } else {
      setTimeout(() => {
        lastRun[key] = now;
      }, 10_000);
    }

    return true;
  }
}

async function eventLoop() {
  const [{ 0: ids, 1: sushiguardPools }, ethPrice] = await Promise.all([
    sushiguard.contracts.FusePoolLens.methods
      .getPublicPoolsByVerificationWithData(true)
      .call({ gas: 1e18 }),
    sushiguard.web3.utils.fromWei(await sushiguard.getEthUsdPriceBN()) as number
  ]);

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];

    if (id == 4) {
      // Pool 4 is broken, we'll just skip it for now.
      continue;
    }

    ///////////////////// Assets /////////////////////

    sushiguard.contracts.FusePoolLens.methods
      .getPoolAssetsWithData(sushiguardPools[i].comptroller)
      .call({
        from: "0x0000000000000000000000000000000000000000",
        gas: 1e18
      })
      .then((assets: FuseAsset[]) => {
        for (const asset of assets) {
          ////////////////// USD //////////////////

          const usdTVL =
            ((asset.totalSupply * asset.underlyingPrice) / 1e36) * ethPrice;

          const usdTVB =
            ((asset.totalBorrow * asset.underlyingPrice) / 1e36) * ethPrice;

          // If no one is lending the asset,
          // we don't need to fetch anything else.
          if (usdTVL == 0) {
            continue;
          }

          poolSuppliedAssetsUSD.set(
            { id, symbol: asset.underlyingSymbol },
            usdTVL
          );

          poolBorrowedAssetsUSD.set(
            { id, symbol: asset.underlyingSymbol },
            usdTVB
          );

          ////////////////// Amount //////////////////

          poolSuppliedAssetsAmount.set(
            { id, symbol: asset.underlyingSymbol },
            asset.totalSupply / 10 ** asset.underlyingDecimals
          );

          poolBorrowedAssetsAmount.set(
            { id, symbol: asset.underlyingSymbol },
            asset.totalBorrow / 10 ** asset.underlyingDecimals
          );

          // If no one is borrowing the asset,
          // we don't need to fetch anything else.
          if (usdTVB == 0) {
            continue;
          }

          ////////////// Interest Rates ///////////////

          const supplyAPY =
            (Math.pow(
              (asset.supplyRatePerBlock / 1e18) * (4 * 60 * 24) + 1,
              365
            ) -
              1) *
            100;

          const borrowAPY =
            (Math.pow(
              (asset.borrowRatePerBlock / 1e18) * (4 * 60 * 24) + 1,
              365
            ) -
              1) *
            100;

          poolAssetsInterestRate.set(
            { id, symbol: asset.underlyingSymbol, side: "supply" },
            supplyAPY
          );

          poolAssetsInterestRate.set(
            { id, symbol: asset.underlyingSymbol, side: "borrow" },
            borrowAPY
          );

          ////////////// Fees And Reserves ///////////////

          if (runEvery("reserves_fees", 600 /* 10 minutes */)) {
            const erc20Token = new sushiguard.web3.eth.Contract(
              JSON.parse(
                sushiguard.compoundContracts[
                  "contracts/CEtherDelegate.sol:CEtherDelegate"
                ].abi
              ),
              asset.erc20Token
            );

            erc20Token.methods
              .totalReserves()
              .call()
              .then(reserves => {
                poolAssetsReservesAmount.set(
                  { symbol: asset.underlyingSymbol, id },
                  reserves / 10 ** asset.underlyingDecimals
                );

                poolAssetsReservesUSD.set(
                  { symbol: asset.underlyingSymbol, id },
                  ((reserves * asset.underlyingPrice) / 1e36) * ethPrice
                );
              });

            erc20Token.methods
              .totalSushiGuardGross()
              .call()
              .then(sushiguardGross => {
                swapAssetsGrossAmount.set(
                  { symbol: asset.underlyingSymbol, id },
                  sushiguardGross / 10 ** asset.underlyingDecimals
                );

                swapAssetsGrossUSD.set(
                  { symbol: asset.underlyingSymbol, id },
                  ((sushiguardGross * asset.underlyingPrice) / 1e36) * ethPrice
                );
              });
          }

          ///////////////// MEV and Flash Loan /////////////////

          if (runEvery("MEV", 600 /* 10 minutes */)) {
            const erc20Token = new sushiguard.web3.eth.Contract(
              JSON.parse(
                sushiguard.compoundContracts[
                  "contracts/OpenMevRoutere.sol:MEV"
                ].abi
              ),
              asset.erc20Token
            );

            erc20Token
              .getPastEvents("LoanError", {
                fromBlock: 12060000,
                toBlock: "latest"
              })
              .then(events => {
                if (events.length != 0) {
                  routerLoanError.set(
                    { id, symbol: asset.underlyingSymbol },
                    events.length
                  );
                }
              });
          }



          if (
            asset.underlyingToken.toLowerCase() ===
              "0x...".toLowerCase() &&
            runEvery("harvest", 600 /* 10 minutes */, true)
          ) {
            sushiGuardRouter.methods
              .getHarvestTotalDeposited(openmevRouterAddress, "1")
              .call()
              .then(harvest => {
                grossHarvestStableAmount.set(
                  ((harvest * asset.underlyingPrice) / 1e36) * ethPrice
                );
                grossHarvestTokenAmount.set(harvest / 1e18);
              });

              sushiGuardRouter.methods
              .getHarvestTotalShareAmount(openmevRouterAddress, "1")
              .call()
              .then(unclaimed => {
                grossHarvestTotalShareAmountUSD.set(
                  ((unclaimed * asset.underlyingPrice) / 1e36) * ethPrice
                );
                grossHarvestTotalShareAmountToken.set(unclaimed / 1e18);
              });
          }
        }
      });

    /////////////////////// RSS /////////////////////

    if (runEvery("rss", 600 /* 10 mins */)) {
      fetch(`https://api.manifoldfinance.com/api/rss?poolID=${id}`)
        .then(res => res.json())
        .then(data => {
          poolRSS.set({ id }, data.totalScore);
        });
    }

    /////////////////// TWAPS //////////////////

    fetch(`https://api.manifoldfinance.com/sushiguard/twaps`)
      .then(res => res.json())
      .then(data => {
        for (const twap of Object.values(data) as {
          ticker: string;
          workable: boolean;
        }[]) {
          twaps.set({ ticker: twap.ticker }, twap.workable ? 1 : 0);
        }
      });
  }
}

// Event loop (every 60 seconds)
setInterval(eventLoop, 60_000);

// Run instantly the first time.
eventLoop();

const app = express();
const port = 1336;

let lastRestart = Date.now();

app.get("/metrics", async (_, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.get("/ops", async (_, res) => {
  res.json({ lastRestart });
});

app.listen(port, () => {
  console.log(`Target server started at http://localhost:${port}/metrics`);
});
