import { createServer } from './server.js';

const PORT = Number(process.env.PORT ?? 3000);

createServer().listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
