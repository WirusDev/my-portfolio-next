import mongoose, { MongooseError } from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(String(process.env.MONGODB_URI));
    return conn;
  } catch (e: unknown) {
    if (e instanceof mongoose.Error.MongooseServerSelectionError) {
      console.error("Mongoose server selection error:", e.message);
    } else if (e instanceof MongooseError) {
      console.error("Mongoose error:", e.message);
    } else {
      console.error("Unknown error occurred:", e);
    }
    throw new Error(String(e));
  }
}
