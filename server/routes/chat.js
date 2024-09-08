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
  chatIdValidator,
  leaveGroupValidator,
  newGroupValidator,
  removeMembersValidator,
  renameGroupValidator,
  sendAttachmentsValidator,
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
app.delete("/leave/:id", leaveGroupValidator(), validateHandle, leaveGroup);

app.post(
  "/message",
  attachmentsMulter,
  sendAttachmentsValidator(),
  validateHandle,
  sendAttatchments
);

app.get("/message/:id", chatIdValidator(), validateHandle, getMessages);

app
  .route("/:id")
  .get(chatIdValidator(), validateHandle, getChatDetails)
  .put(renameGroupValidator(), validateHandle, renameGroup)
  .delete(chatIdValidator(), validateHandle, deleteChat);

export default app;
