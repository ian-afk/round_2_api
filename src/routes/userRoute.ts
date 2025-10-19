import { signin, signup } from '../controller/authController';
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUsers,
} from '../controller/userController';
import { Router } from 'express';

const router = Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).patch(updateUsers).delete(deleteUser);

router.route('/signup').post(signup);
router.route('/signin').post(signin);
export default router;
