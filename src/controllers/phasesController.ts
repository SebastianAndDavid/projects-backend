import { Router, Response, Request } from 'express';
import PhasesService from '../services/PhasesService';

export default Router().post('/', async (req: Request, res: Response) => {
  try {
    const data = await PhasesService.createPhase(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});
