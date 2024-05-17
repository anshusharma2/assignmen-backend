import mongoose, { Schema, Document, SchemaTypes } from "mongoose";
import { LogEntry } from "../types";
const LogEntrySchema = new Schema(
  {
    address: { type: String, required: true },
    blockNumber: { type: Number, required: true },
    transactionHash: { type: String, required: true, unique: true },
    blockHash: { type: String, required: true },
  },
  { timestamps: true }
);

// Define and export the Mongoose model
export interface LogEntryDocument extends LogEntry, Document {}
const LogEntryModel = mongoose.model<LogEntryDocument>(
  "LogEntry",
  LogEntrySchema
);

export default LogEntryModel;
