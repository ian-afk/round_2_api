import express from 'express';

import postRoutes from './routes/postRoute';
import userRoutes from './routes/userRoute';
import cors from 'cors';
import commentRoutes from './routes/commentRoute';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from round 2!');
});

app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

export { app };
