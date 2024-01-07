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
      const { id } = req.params;
      const data = await seedPhasesService.getAllTasksByMilestone(id);
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/all/milestones', async (req: Request, res: Response) => {
    try {
      const data = await seedPhasesService.getAllMilestones();
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/milestone/:id', async (req: Request, res: Response) => {
    try {
      res.json();
    } catch (error) {
      console.error(error);
    }
  });
