import connectDB from "@/utils/db";
import PostModel from "@/models/PostModel";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const postData = await PostModel.find({});
    return NextResponse.json({ message: "OK", postData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      { status: 500 }
    );
  }
};
