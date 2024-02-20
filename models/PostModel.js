import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = models.Post || model("Post", postSchema);

export default PostModel;
