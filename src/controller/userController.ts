import { Request, Response } from 'express';
import {
  findUserById,
  listUsers,
  createUser as createUserService,
  deleteUser as deleteUserService,
  updateUser,
} from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  const users = await listUsers();

  try {
    res.status(200).json({ status: 'success', data: users });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = await createUserService(user);

  try {
    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
  const user = await findUserById(req.params.id);

  try {
    res.status(200).json({ status: 'success', user });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const updateUsers = async (req, res) => {
  const userId = req.params.id;
  const user = await updateUser(userId, req.body);

  try {
    res.status(200).json({
      status: 'success',
      message: 'User successfully upadated',
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    await deleteUserService(userId);
    res.status(200).json({
      status: 'success',
      message: 'User deleted Successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
