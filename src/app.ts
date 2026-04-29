import express from 'express';
import helloRouter from './routes/hello.js';

const app = express();

app.use('/hello', helloRouter);

export default app;
