// import { truncate } from '../test-utils/truncate';
import request from 'supertest';
import app from '../src/app';
// import { prisma } from '../src/utils/db.server';

const mockProject = {
  name: 'Smith Kitchen',
  street: '123 SE New RD',
  city: 'Springfield',
  state: 'Alabama',
  zip_code: '97123',
  deposit: '$500',
};
const mockProjectWithOwner = {
  name: 'Franklin Kitchen',
  street: '123 SE New RD',
  city: 'Springfield',
  apt: '45',
  state: 'Alabama',
  zip_code: '97123',
  deposit: '$500',
};
const mockProjectWithApt = {
  name: 'Smith Kitchen',
  apt: '45',
  street: '123 SE New RD',
  city: 'Springfield',
  state: 'Alabama',
  zip_code: '97123',
  deposit: '$500',
};

// beforeEach(async () => {
//   await truncate(['Projects'], prisma);
// });

it.skip('#POST connects to server', async () => {
  const res = await request(app).post('/projects');
  expect(res.status).toBe(200);
});
it.skip('#POST should create a new Project', async () => {
  const res = await request(app).post('/projects').send(mockProject);
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    id: expect.any(Number),
    name: expect.any(String),
    apt: null,
    street: expect.any(String),
    city: expect.any(String),
    state: expect.any(String),
    zip_code: expect.any(String),
    deposit: expect.any(String),
    createdAt: expect.any(String),
  });
});
it.skip('#POST should create a new Project with apt', async () => {
  const res = await request(app).post('/projects').send(mockProjectWithApt);
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    id: expect.any(Number),
    name: expect.any(String),
    apt: expect.any(String),
    street: expect.any(String),
    city: expect.any(String),
    state: expect.any(String),
    zip_code: expect.any(String),
    deposit: expect.any(String),
    createdAt: expect.any(String),
  });
});
it.skip('#POST should create a new Project and f(key) to an existing homeowner', async () => {
  const id = 8;
  const data = await request(app).get(`/homeowners/${id}`);
  const res = await request(app)
    .post(`/projects/${data.body.id}`)
    .send(mockProjectWithOwner);
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    id: expect.any(Number),
    name: expect.any(String),
    apt: expect.any(String),
    street: expect.any(String),
    city: expect.any(String),
    state: expect.any(String),
    zip_code: expect.any(String),
    deposit: expect.any(String),
    createdAt: expect.any(String),
  });
});
it.skip('#GET gets all projects', async () => {
  const res = await request(app).get('/projects/all');
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(2);
});
it.skip('#GET gets an existing project by id', async () => {
  const res = await request(app).get('/projects/8');
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    ...mockProjectWithApt,
    createdAt: expect.any(String),
  });
});
it('#GET existing project(s) and f(key) homeowner(s)', async () => {
  const id = 8;
  const data = await request(app).get(`/homeowners/${id}`);
  const res = await request(app).get(`/projects/homeowners/${data.body.id}`);
  console.log('res.body', res.body);
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(8);
});
