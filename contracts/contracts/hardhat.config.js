
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/HpzYaf2-rybEBEw6qC5Gv",
      accounts: ["0x321ab57dbd5c94b6afe20fd58d39eaeffc91d8066909bdac23f90183059187f2"]
    }
  }
};
