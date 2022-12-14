require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  hardhat: {
    allowUnlimitedContractSize: true,
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: process.env.COINCAP_API,
  },
  settings: {
      optimizer: {
          enabled: true,
          runs: 2000,
          details: {
              yul: true,
              yulDetails: {
                  stackAllocation: true,
                  optimizerSteps: "dhfoDgvulfnTUtnIf"
              }
          }
      }
  },
};
