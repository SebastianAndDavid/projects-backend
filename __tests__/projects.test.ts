import { truncate } from '../test-utils/truncate';
import request from 'supertest';
import app from '../src/app';
import { prisma } from '../src/utils/db.server';

const mockProject = {
    name: 'Smith Kitchen',
    address: 

};

beforeEach(async () => {
  await truncate(['Projects'], prisma);
});

it('#POST should create a new Project', async () => {});
