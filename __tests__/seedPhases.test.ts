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
it.skip('#GET array of all tasks by phase milestone id', async () => {
  const id = 1;
  const res = await request(app).get(`/seedPhases/${id}`);
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(2);
});
it('#GET array of all milestones', async () => {
  const res = await request(app).get('/seedPhases/all/milestones');
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(2);
});
