import { Request, Response, Router } from 'express';
import seedPhasesService from '../services/seedPhasesService';

export default Router()
  .get('/', async (req: Request, res: Response) => {
    try {
      const data = await seedPhasesService.getAllPhases();
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/:id', async (req: Request, res: Response) => {
    try {
      const data = await seedPhasesService.getAllTasksByMilestone();
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  });
