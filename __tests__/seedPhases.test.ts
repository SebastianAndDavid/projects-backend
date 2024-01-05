import request from 'supertest';
import app from '../src/app';

it.skip('validating server connection', async () => {
  const res = await request(app).get('/seedPhases');
  expect(res.status).toBe(200);
});
it.skip('#GET gets all phases, milestones, and tasks', async () => {
  const res = await request(app).get('/seedPhases');
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(2);
});
