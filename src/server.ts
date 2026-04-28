import express from 'express';

export function createApp(): express.Express {
  const app = express();
  app.use(express.json());
  app.get('/hello', (_req, res) => {
    res.status(200).json({ greeting: 'world' });
  });
  return app;
}
