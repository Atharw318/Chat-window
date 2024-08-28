import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  getMyChats,
  getMyGroups,
  newGroupChat,
  addMembers,
  removeMember,
  leaveGroup,
} from "../controllers/chat.js";

const app = express.Router();

// User must be logged in to access the routes
app.use(isAuthenticated);

// Group chat create
app.post("/new", newGroupChat);
app.get("/my", getMyChats);
app.get("/my/groups", getMyGroups);
app.put("/addmembers", addMembers);
app.put("/removemembers", removeMember);
app.delete("/leave/:id", leaveGroup);

//Send Attatchments
// GEt Message
// Get Chat detials, rename, delete

export default app;
