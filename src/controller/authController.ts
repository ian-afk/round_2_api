import {
  signUp as signUpServuce,
  signIn as signInService,
} from '../services/authService';

export const signup = async (req, res) => {
  const { username, fullName, email, password } = req.body;
  const newUser = await signUpServuce({
    username,
    fullName,
    email,
    password,
  });

  res.status(201).json({
    status: 'success',
    ...newUser,
  });
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error('Please provide email and password');
  }
  const token = await signInService({ email, password });
  res.status(200).json({
    status: 'success',
    token,
  });
};
