import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Post content is required'],
    },
  },
  { timestamps: true },
);

export const Post = mongoose.model('Post', postSchema);
