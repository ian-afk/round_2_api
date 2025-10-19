import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema(
  {
    content: String,
  },
  { timestamps: true },
);

export const Post = mongoose.model('Post', postSchema);
