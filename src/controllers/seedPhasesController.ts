import { Request, Response, Router } from 'express';
import seedPhasesService from '../services/seedPhasesService';

export default Router().get('/', async (req: Request, res: Response) => {
  try {
    const data = await seedPhasesService.getAllPhases();
    console.log('data', data);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});
