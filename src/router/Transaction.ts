import express from "express";
import Transaction from '../controller/Transaction'
const router = express.Router();

router.get("/getalltransactions", Transaction.getPastTransaction);

export default router;
