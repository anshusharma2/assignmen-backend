import mongoose, { Schema, Document, SchemaTypes } from "mongoose";
import { LogEntry } from "../types";
const LastBlockSchema = new Schema(
  {
    blockNumber: { type: Number, required: true },
  },
  { timestamps: true }
);

// Define and export the Mongoose model
export interface LogEntryDocument extends Document {}
const LastBlockModel = mongoose.model<LogEntryDocument>(
  "LastBlock",
  LastBlockSchema
);

export default LastBlockModel;
