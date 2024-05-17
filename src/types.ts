interface ReturnValues {
    '0': bigint;
    '1': bigint;
    __length__: number;
    oldValue: bigint;
    newValue: bigint;
  }
  
  interface RawData {
    data: string;
    topics: string[];
  }
  
  export interface LogEntry {
    address: string;
    topics: string[];
    data: string;
    blockNumber: number;
    transactionHash: string;
    transactionIndex: bigint;
    blockHash: string;
    logIndex: bigint;
    removed: boolean;
    returnValues: ReturnValues;
  }