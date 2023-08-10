import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import blogRoute from "./routes/blogRoute.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/blog", blogRoute);

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(3001, () => {
  connectionToDB();
  console.log("server connected.");
});
