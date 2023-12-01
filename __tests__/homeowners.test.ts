import { truncate } from '../test-utils/truncate';
import request from 'supertest';
import app from '../src/app';
import { prisma } from '../src/utils/db.server';

beforeEach(async () => {
  await truncate(['Homeowners'], prisma);
});

it('#POST connects to server', async () => {
  const res = await request(app).post('/homeowners');
  expect(res.status).toBe(200);
});
