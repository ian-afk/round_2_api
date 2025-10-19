import { createPost, getPost } from '../controller/postController';
import { Router } from 'express';

const router = Router();

router.route('/').get(getPost).post(createPost);

export default router;
