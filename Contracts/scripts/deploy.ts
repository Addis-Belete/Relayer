import { ethers } from "hardhat";

async function main() {
 
const targetContract = await ethers.getContractFactory("Token");
const USDT = await targetContract.deploy("Tether", "USDT");
await USDT.deployed();

console.log(USDT.address, "address USDT")

const DAI = await targetContract.deploy("DAI", "DAI");
await DAI.deployed();
console.log(DAI.address, "DAI address")

const USDC = await targetContract.deploy("USD Coin", "USDC")
await USDC.deployed()

console.log(USDC.address, "USDC address");

const receiverContract = await ethers.getContractFactory("Receiver");

const receiver = await receiverContract.deploy()
await receiver.deployed();

console.log(receiver.address, "receiverAddress")

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
