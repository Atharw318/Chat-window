import express from "express";
import {
  getMyProfile,
  login,
  Logout,
  newUser,
  searchUser,
  sendFriendRequest,
  acceptFriendRequest,
} from "../controllers/user.js";
import { singalAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  acceptFriendRequestValidator,
  loginValidator,
  registerValidator,
  sendFriendRequestValidator,
  validateHandle,
} from "../lib/validators.js";

const app = express.Router();

app.post("/new", singalAvatar, registerValidator(), validateHandle, newUser);
app.post("/login", loginValidator(), validateHandle, login);

// User must be logged in to access the routes
app.use(isAuthenticated);

app.get("/profile", getMyProfile);
app.get("/logout", Logout);

// Search User
app.get("/search", searchUser);

//Send Request
app.put(
  "/send-request",
  sendFriendRequestValidator(),
  validateHandle,
  sendFriendRequest
);

app.put(
  "/accept-request",
  acceptFriendRequestValidator(),
  validateHandle,
  acceptFriendRequest
);

export default app;
