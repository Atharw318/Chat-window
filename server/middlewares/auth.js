import { ErrorHandler } from "../utils/utility.js";
import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  const token = req.cookies["authToken"];
  if (!token)
    return next(
      new ErrorHandler(
        "Unauthorized User,  Please login first to access this route",
        401
      )
    );
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decodeData._id;

  next();
};

export { isAuthenticated };
