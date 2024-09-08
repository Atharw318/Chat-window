import { body, validationResult, check, param, query } from "express-validator";
import { ErrorHandler } from "../utils/utility.js";

const validateHandle = (req, res, next) => {
  const errors = validationResult(req);
  const errorMessage = errors
    .array()
    .map((err) => err.msg)
    .join(", ");

  // console.log(errorMessage);

  if (errors.isEmpty()) return next();
  else next(new ErrorHandler(errorMessage, 400));
};

const registerValidator = () => [
  body("name", "Please Enter Name").notEmpty(),
  body("username", "Please Enter UserName").notEmpty(),
  body("password", "Please Enter Password").notEmpty(),
  body("bio", "Please Enter Bio").notEmpty(),
  check("avatar", "Please Upload Avatar").notEmpty(),
];
const loginValidator = () => [
  body("username", "Please Enter UserName").notEmpty(),
  body("password", "Please Enter Password").notEmpty(),
];

const newGroupValidator = () => [
  body("name", "Please Enter Name").notEmpty(),
  body("members")
    .notEmpty()
    .withMessage("Please Enter Members")
    .isArray({ min: 2, max: 100 })
    .withMessage("Members must be 2-100"),
];

const addMembersValidator = () => [
  body("chatId", "Please Enter Chat Id").notEmpty(),
  body("members")
    .notEmpty()
    .withMessage("Please Enter Members")
    .isArray({ min: 1, max: 97 })
    .withMessage("Members must be 1-97"),
];

const removeMembersValidator = () => [
  body("userId", "Please Enter User Id").notEmpty(),
  body("chatId", "Please Enter Chat Id").notEmpty(),
];

const leaveGroupValidator = () => [
  param("id", "Please Enter Chat Id").notEmpty(),
];

const sendAttachmentsValidator = () => [
  body("chatId", "Please Enter Chat Id").notEmpty(),
  check("files")
    .notEmpty()
    .withMessage("Please Upload Attachments")
    .isArray({ min: 1, max: 1 - 5 })
    .withMessage("Attachments must be 1-5"),
];

const chatIdValidator = () => [param("id", "Please Enter Chat Id").notEmpty()];

const renameGroupValidator = () => [
  param("id", "Please Enter Chat Id").notEmpty(),
  body("name", "Please Enter Group NewName").notEmpty(),
];

const sendFriendRequestValidator = () => [
  body("userId", "Please Enter User Id").notEmpty(),
];

const acceptFriendRequestValidator = () => [
  body("requestId", "Please Enter Request Id").notEmpty(),
  body("accept")
    .notEmpty()
    .withMessage("Please Add Accept")
    .isBoolean()
    .withMessage("Accept must be true or false"),
];

export {
  registerValidator,
  validateHandle,
  loginValidator,
  newGroupValidator,
  addMembersValidator,
  removeMembersValidator,
  leaveGroupValidator,
  sendAttachmentsValidator,
  chatIdValidator,
  renameGroupValidator,
  sendFriendRequestValidator,
  acceptFriendRequestValidator,
};
