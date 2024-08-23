import mongoose from "mongoose";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Chat-Window" })
    .then((responce) =>
      console.log(`Connected to DB: ${responce.connection.host}`)
    )
    .catch((error) => {
      throw error;
    });
};

export { connectDB };
