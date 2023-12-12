import { Request, Response, Router } from 'express';
import HomeownersService from '../services/HomeownersService';

export default Router()
  .post('/', async (req: Request, res: Response) => {
    try {
      const data = await HomeownersService.createHomeowner(req.body);
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/all', async (req: Request, res: Response) => {
    try {
      const data = await HomeownersService.getHomeowners();
      res.json(data);
    } catch (error) {}
  })
  .get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await HomeownersService.getHomeownerById(id);
      res.json(data);
    } catch (error) {}
  });
