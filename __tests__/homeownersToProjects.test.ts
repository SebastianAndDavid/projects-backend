import request from 'supertest';
import app from '../src/app';

it('#POST adds an existing homeowner to a project', async () => {
  const res = await request(app).post('homeownertoproject');
  expect(res.status).toBe(200);
});
