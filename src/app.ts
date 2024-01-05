/* eslint-disable no-console */
import express, { Express } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import projectsController from './controllers/projectsController';
import homeownersController from './controllers/homeownersController';
import seedPhasesController from './controllers/seedPhasesController';

dotenv.config();

if (!process.env.PORT) {
  console.log('No PORT detected!');
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app: Express = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use('/projects', projectsController);
app.use('/homeowners', homeownersController);
app.use('/seedPhases', seedPhasesController);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
