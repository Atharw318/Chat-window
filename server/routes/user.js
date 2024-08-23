import express from "express";
import { login, newUser } from "../controllers/user.js";
import { singalAvatar } from "../middlewares/multer.js";

const app = express.Router();

app.post("/new", singalAvatar, newUser);

app.post("/login", login);

export default app;
