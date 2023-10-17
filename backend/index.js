import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = 3090;

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB: " + e);
  });

const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
