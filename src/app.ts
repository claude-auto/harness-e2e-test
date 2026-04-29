import express, { type Express } from 'express';

export function createApp(): Express {
  const app = express();

  app.get('/status', (_req, res) => {
    res.status(200).json({ ok: true });
  });

  return app;
}
