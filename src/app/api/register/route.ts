import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const client = await clientPromise;
  const db = client.db();
  const usersCollection = db.collection("users");

  const hashedPassword = await bcrypt.hash(password, 10);

  await usersCollection.insertOne({
    email,
    password: hashedPassword,
  });

  res.status(200).json({ message: "User registered" });
}
