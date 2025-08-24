const hre = require("hardhat");

async function main(name, symbol, supply, owner) {
  const MemeToken = await hre.ethers.getContractFactory("MemeToken");
  const token = await MemeToken.deploy(name, symbol, supply, owner);
  await token.deployed();

  console.log(`✅ Token deployed at: ${token.address}`);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 4) {
    console.error("Usage: node deploy.js <NAME> <SYMBOL> <SUPPLY> <OWNER>");
    process.exit(1);
  }
  main(args[0], args[1], parseInt(args[2]), args[3])
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
