import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from './server.js';

describe('GET /hello', () => {
  it('returns 200 with {greeting:"world"}', async () => {
    const res = await request(createApp()).get('/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ greeting: 'world' });
  });
});
