import request from 'supertest';
import app from '../src/app';

const mockPhase = {
  name: 'Programming',
  goal: 'Establish the design direction',
  projectId: 8,
};

it('#POST creates a new phase without milestones or tasks', async () => {
  const res = await request(app).post('/phases').send(mockPhase);
  expect(res.status).toBe(200);
  expect(res.body).toEqual(mockPhase);
});
