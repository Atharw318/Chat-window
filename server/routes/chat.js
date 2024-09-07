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
  getMessages,
} from "../controllers/chat.js";
import { attachmentsMulter } from "../middlewares/multer.js";
import {
  addMembersValidator,
  newGroupValidator,
  removeMembersValidator,
  validateHandle,
} from "../lib/validators.js";

const app = express.Router();

// User must be logged in to access the routes
app.use(isAuthenticated);

// Group chat create
app.post("/new", newGroupValidator(), validateHandle, newGroupChat);
app.get("/my", getMyChats);
app.get("/my/groups", getMyGroups);
app.put("/addmembers", addMembersValidator(), validateHandle, addMembers);
app.put(
  "/removemembers",
  removeMembersValidator(),
  validateHandle,
  removeMember
);
app.delete("/leave/:id", leaveGroup);

app.post("/message", attachmentsMulter, sendAttatchments);

app.get("/message/:id", getMessages);

app.route("/:id").get(getChatDetails).put(renameGroup).delete(deleteChat);

export default app;
