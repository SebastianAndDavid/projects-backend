import { truncate } from '../test-utils/truncate';
import request from 'supertest';
import app from '../src/app';
import { prisma } from '../src/utils/db.server';

const mockProject = {
  name: 'Smith Kitchen',
  street: '123 SE New RD',
  city: 'Springfield',
  state: 'Alabama',
  zip_code: '97123',
  deposit: '$500',
};

beforeEach(async () => {
  await truncate(['Projects'], prisma);
});
it.only('#POST connects to server', async () => {
  const res = await request(app).post('/projects');
  expect(res.status).toBe(200);
});
it('#POST should create a new Project', async () => {
  const res = await request(app).post('/projects').send(mockProject);
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    name: expect.any(String),
  });
});
