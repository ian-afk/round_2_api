import express from 'express';

import postRoutes from './routes/postRoute';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from round 2!');
});

app.use('/api/post', postRoutes);

export { app };
