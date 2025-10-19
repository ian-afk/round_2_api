import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from round 2!');
});

export { app };
