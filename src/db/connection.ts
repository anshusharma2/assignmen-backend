import mongoose from "mongoose";

mongoose
.connect("mongodb://localhost:27017", {
  // @ts-ignore
  useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("Database Connected Successfully");
  })
  .catch((err) => {
    console.error(err, "Database Connection Failed");
  });

// Define a function to handle graceful shutdown
const gracefulShutdown = async (signal:string) => {
  try {
    // Disconnect from the MongoDB database
    await mongoose.disconnect();
    console.log("Disconnected from the database");
    console.log(`Received ${signal}. Exiting gracefully.`);
    process.exit(0); // Successful exit
  } catch (error) {
    console.error("Error occurred while disconnecting from the database:", error);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
};

const signals = ['SIGTERM', 'SIGINT', 'SIGQUIT'];

signals.map(signal => {
  process.on(signal, () => gracefulShutdown(signal));
});