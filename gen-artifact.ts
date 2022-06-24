
import path from 'path'
import fs from 'fs'

import glob from 'glob'

/**
 * Script for automatically generating a file which has a series of `require` statements for
 * importing JSON contract artifacts. We do this to preserve browser compatibility.
 */
const main = async () => {
  const contractArtifactsFolder = path.resolve(
    __dirname,
    `../artifacts/contracts`
  )

  const artifactPaths = glob
    .sync(`${contractArtifactsFolder}/**/*.json`)
    .filter((match) => {
      // Filter out the debug outputs.
      return !match.endsWith('.dbg.json')
    })

  const content = `
    /* eslint-disable @typescript-eslint/no-var-requires, no-empty */
    /*
    THIS FILE IS AUTOMATICALLY GENERATED.
    DO NOT EDIT.
    */
    ${artifactPaths
      .map((artifactPath) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const artifact = require(artifactPath)
        // handles the case - '\u' (\utils folder) is considered as an unicode encoded char
        const pattern = /\\/g
        const relPath = path
          .relative(__dirname, artifactPath)
          .replace(pattern, '/')
        return `
        let ${artifact.contractName}
        try {
          ${artifact.contractName} = require('${relPath}')
        } catch {}
        `
      })
      .join('\n')}
    export const getContractArtifact = (name: string): any => {
      return {
        ${artifactPaths
          .map((artifactPath) => {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const artifact = require(artifactPath)
            return `${artifact.contractName}`
          })
          .join(',\n')}
      }[name]
    }
    `

  fs.writeFileSync(
    path.resolve(__dirname, `../src/contract-artifacts.ts`),
    content
  )
}

main()
