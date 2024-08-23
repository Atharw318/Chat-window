import express from "express";
import { getMyProfile, login, newUser } from "../controllers/user.js";
import { singalAvatar } from "../middlewares/multer.js";

const app = express.Router();

app.post("/new", singalAvatar, newUser);
app.post("/login", login);

// User must be logged in to access the routes

app.get("/profile", getMyProfile);

export default app;
