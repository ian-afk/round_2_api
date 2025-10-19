import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Post content is required'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
  },
  { timestamps: true },
);

export const Post = mongoose.model('Post', postSchema);
