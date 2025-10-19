import type { Request, Response, NextFunction } from 'express';
import {
  createPost as createPostService,
  findPostById,
  listPost,
  updatePost as updatePostService,
  deletePost as deletePostService,
} from '../services/postService';

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const newPost = await createPostService(req.body);
  try {
    res.status(201).json({
      status: 'success',
      message: 'Post created successfully',
      post: newPost,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const post = await listPost();
  try {
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const post = await findPostById(req.params.id);

  try {
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const post = await updatePostService(req.params.id, { content: req.body });
  try {
    res.status(200).json({
      status: 'success',
      message: 'Post updated successfully',
      post,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await deletePostService(req.params.id);

  try {
    res.status(200).json({
      status: 'success',
      message: 'Post deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};
