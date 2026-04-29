import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app';

describe('GET /status', () => {
  it('returns 200 with JSON body { ok: true }', async () => {
    const app = createApp();
    const response = await request(app).get('/status');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({ ok: true });
  });
});
