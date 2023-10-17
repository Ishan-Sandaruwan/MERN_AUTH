import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

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
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);