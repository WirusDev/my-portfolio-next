import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    console.log("Received data:", { username, password });

    const client = await clientPromise;
    const db = client.db("mydatabase");
    console.log("Connected to MongoDB");

    // Проверьте пользователя в базе данных
    const user = await db.collection("users").findOne({ username, password });
    console.log("User found:", user);

    if (user) {
      return NextResponse.json({ message: "Login successful" });
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Error during login:", e.message);
      return NextResponse.json(
        { message: "Internal server error", error: e.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error during login:", e);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "GET method is not implemented" },
    { status: 405 }
  );
}
