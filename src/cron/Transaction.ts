import { Contract, ethers } from "ethers";
import cron from "node-cron";
import LogEntryModel from "../models/LogEntryModel";
import abi from "../abi";
import LastBlock from "../models/LastBlock";
export default async function startTransactionCron() {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://rpc.ankr.com/eth_holesky`
    );
    const contractAddress = "0xe851dc85d7e274DE7b9e3AC077C5C1AEF7BbA479";
    let contract = new Contract(contractAddress, abi, provider);
      contract.on("Transfer", async (from, to, amount, event) => {
        try {
          console.log(event);
          const { address, blockHash, blockNumber, transactionHash } = event;
          await LogEntryModel.create({
            address,
            blockNumber,
            transactionHash,
            blockHash,
          });
        } catch (error) {
          console.error("Error occurred while processing event:", error);
        }
      });
  } catch (error) {
    console.log(error);
  }
}
