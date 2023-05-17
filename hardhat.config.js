require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.17",
  etherscan: {
    apiKey: "MH7V1CKC4X2DD14RVCDZ3JQEKAX3QIFIQ3"
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/UCEr3S277XjR5Z-Qb5Ugg-5HDygx4knn',
      accounts: [`0x6f10c2937eca2145e9b3301e33b0f7d9e0c1cc9607194aca3b3bc077d94ae7fa`]
    }
  }
};
