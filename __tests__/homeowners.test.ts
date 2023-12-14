// import { truncate } from '../test-utils/truncate';
import request from 'supertest';
import app from '../src/app';
// import { prisma } from '../src/utils/db.server';

const mockHomeowner = {
  first_name: 'Gina',
  last_name: 'Smith',
  // company: 'Dunder-Mifflin',
  email: 'smith@dundermifflin.com',
  apt: '123',
  phone: '(971) 978-7725',
  street: '123 Any St',
  city: 'Scranton',
  state: 'Pepe Sylvia',
  zip_code: '46372',
};

// beforeEach(async () => {
//   await truncate(['Homeowners'], prisma);
// });

it.skip('#POST connects to server', async () => {
  const res = await request(app).post('/homeowners');
  expect(res.status).toBe(200);
});
it.skip('#POST should create a new Homeowner', async () => {
  const res = await request(app).post('/homeowners').send(mockHomeowner);
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    id: expect.any(Number),
    first_name: expect.any(String),
    last_name: expect.any(String),
    company: null,
    email: expect.any(String),
    phone: expect.any(String),
    apt: expect.any(String),
    street: expect.any(String),
    city: expect.any(String),
    state: expect.any(String),
    zip_code: expect.any(String),
    createdAt: expect.any(String),
  });
});
it.skip('#GET gets all homeowners', async () => {
  const res = await request(app).get('/homeowners/all');
  expect(res.status).toBe(200);
  expect(res.body.length).toEqual(1);
});
it.skip('#GET gets homeowner by id', async () => {
  const res = await request(app).get('/homeowners/8');
  expect(res.status).toBe(200);
});
it('#PUT updates homeowner name', async () => {
  const res = await request(app)
    .put('/homeowners')
    .send({ ...mockHomeowner, first_name: 'Gayle' });
  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    id: expect.any(Number),
    first_name: 'Gayle',
    last_name: expect.any(String),
    company: null,
    email: expect.any(String),
    phone: expect.any(String),
    apt: expect.any(String),
    street: expect.any(String),
    city: expect.any(String),
    state: expect.any(String),
    zip_code: expect.any(String),
    createdAt: expect.any(String),
  });
});
