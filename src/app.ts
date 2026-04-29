import express from 'express';
import helloRouter from './routes/hello.js';

const app = express();

app.use('/hello', helloRouter);

app.get('/ping', (_req, res) => {
  res.status(200).json({ pong: true });
});

export default app;
