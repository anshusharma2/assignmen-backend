import express from "express";
import router from "./router/Transaction";
import startTransactionCron from "./cron/Transaction";
import "./db/connection"
import cors from "cors"
async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  app.use(express.json());
  app.use(cors())

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  app.use("/api", router);
  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
startTransactionCron();
