import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  getMyChats,
  getMyGroups,
  newGroupChat,
  addMembers,
  removeMember,
  leaveGroup,
  sendAttatchments,
  getChatDetails,
  renameGroup,
  deleteChat,
} from "../controllers/chat.js";
import { attachmentsMulter } from "../middlewares/multer.js";

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

app.post("/message", attachmentsMulter, sendAttatchments);

// GEt Message

app.route("/:id").get(getChatDetails).put(renameGroup).delete(deleteChat);

export default app;
