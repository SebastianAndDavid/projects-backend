import request from 'supertest';
import app from '../src/app';

it('#GET gets all phases, milestones, and tasks', async () => {
  const res = await request(app).get('/seedPhases');
  expect(res.status).toBe(200);
});
