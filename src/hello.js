// private async getEvents(
//     startBlock: number,
//     endBlock: number
//   ): Promise<Event[]> {
//     return this.feeCollectorContract.queryFilter(
//       this.feeCollectorContract.filters.FeesCollected(),
//       startBlock,
//       endBlock
//     );
//   }
      // Get the latest saved block number from the database
      const latestBlockInDb = await this.getStartEndBlock(
        this.chain.oldestBlock,
        "polygon"
      );
      console.log(
        "getEventsForIntegratorgetEventsForIntegrator",
        latestBlockInDb
      );

      if (!latestBlockInDb.error) {
        const events = await this.getEvents(
          latestBlockInDb.startBlock,
          latestBlockInDb.endBlock
        );
        if (events.length) {
          await this.updateLatestBlock(
            events[events.length - 1].blockNumber,
            "polygon"
          );

          for (const event of events) {
            await this.processEvent(event);
          }
        } else {
          await this.updateLatestBlock(latestBlockInDb.endBlock, "polygon");
        }
        console.info(
          `Scanned ${events.length} events and stored them in the database.`
        );
      }

