import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /ping', () => {
  it('returns {"pong":true} with 200 and JSON content-type', async () => {
    const response = await request(app).get('/ping');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({ pong: true });
  });
});
