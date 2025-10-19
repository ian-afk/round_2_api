import {
  createPost,
  deletePost,
  getPost,
  getPostById,
  updatePost,
} from '../controller/postController';
import { Router } from 'express';

const router = Router();

router.route('/').get(getPost).post(createPost);

router.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

export default router;
