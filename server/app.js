import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;

const port = process.env.PORT || 8000;

connectDB(mongoURI);

const app = express();

//using middlewares
app.use(express.json());

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Port is running on port: ${port}`);
});
