import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /hello', () => {
  it('returns 200 with JSON body { message: "hello world" }', async () => {
    const response = await request(app).get('/hello');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({ message: 'hello world' });
  });
});
