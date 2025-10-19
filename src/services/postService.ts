import { Post } from '../db/models/post';

export const listPost = async () => {
  const post = await Post.find({});
  return post;
};

export const createPost = async ({ content }) => {
  const post = await Post.create({ content });

  return post;
};
