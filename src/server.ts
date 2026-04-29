import http from 'node:http';
import { VERSION } from './version.js';

export function createServer(): http.Server {
  return http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/version') {
      res.statusCode = 200;
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({ version: VERSION }));
      return;
    }
    res.statusCode = 404;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ error: 'not found' }));
  });
}
