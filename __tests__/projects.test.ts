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
it.skip('#GET gets a project by id and includes f(key) homeowners', async () => {
  const res = await request(app).get('/projects/17');
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    apt: '45',
    city: 'Springfield',
    createdAt: '2023-12-12T18:38:49.735Z',
    deposit: '$500',
    homeowners: [
      {
        apt: '123',
        city: 'Scranton',
        company: null,
        createdAt: '2023-12-12T00:01:16.224Z',
        email: 'smith@dundermifflin.com',
        first_name: 'Gina',
        id: 8,
        last_name: 'Smith',
        phone: '(971) 978-7725',
        state: 'Pepe Sylvia',
        street: '123 Any St',
        zip_code: '46372',
      },
    ],
    id: 17,
    name: 'Franklin Kitchen',
    state: 'Alabama',
    street: '123 SE New RD',
    zip_code: '97123',
  });
});
it.skip('#GET all existing project(s) and f(key) homeowner', async () => {
  const id = 8;
  const data = await request(app).get(`/homeowners/${id}`);
  const res = await request(app).get(`/projects/homeowners/${data.body.id}`);
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(8);
});
it('#PUT updates the name of an existing project, by project id', async () => {
  const data = await request(app).get('/projects/9');
  const res = await request(app)
    .put(`/projects/${data.body.id}`)
    .send({ ...mockProjectWithApt, name: 'Smith Bathroom' });
  expect(res.status).toBe(200);
});
