import { Request, Response } from "express";
import LogEntryModel from "../models/LogEntryModel";

export default class Transaction {
  static getPastTransaction = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const perPage = parseInt(req.query.perPage as string) || 10;
      const skip = (page - 1) * perPage;
      const totalCount = await LogEntryModel.countDocuments({});
      const transactions = await LogEntryModel.find({})
        .skip(skip)
        .limit(perPage);
      res.status(200).json({
        transactions,
        page,
        perPage,
        totalRecords: totalCount,
        totalPages: Math.ceil(totalCount / perPage),
      });
    } catch (error) {
      res.status(400).json({
        err: error,
      });
    }
  };
}
