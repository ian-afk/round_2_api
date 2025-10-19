import type { Request, Response, NextFunction } from 'express';
import {
  createPost as createPostService,
  listPost,
} from '../services/postService';

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const newPost = await createPostService(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Post created successfully',
    post: newPost,
  });
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const post = await listPost();
  res.status(200).json({
    status: 'success',
    data: post,
  });
};
