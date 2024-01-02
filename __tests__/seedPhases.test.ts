import request from 'supertest';
import app from '../src/app';

it.skip('#GET gets all phases, milestones, and tasks', async () => {
  const res = await request(app).get('/seedPhases');
  expect(res.status).toBe(200);
});
it('#GET gets all phases', async () => {
  const res = await request(app).get('/seedPhases');
  expect(res.status).toBe(200);
  console.log('res.body', res.body[0].MilestonesReadOnly);
  expect(res.body.length).toEqual(2);
});
