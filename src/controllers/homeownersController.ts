import { Request, Response, Router } from 'express';
import HomeownersService from '../services/HomeownersService';

export default Router().post('/', async (req: Request, res: Response) => {
  try {
    const data = await HomeownersService.createHomeowner(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});
