import connectDB from "@/utils/db";
import PostModel from "@/models/PostModel";

export async function GET(req: any) {
  await connectDB();
  const postData = await PostModel.find({});
  return Response.json(postData);
}
