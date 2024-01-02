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
    } catch (error) {
      console.error(error);
    }
  })
  .get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await HomeownersService.getHomeownerById(id);
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .put('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id)
        return res.status(400).json({ error: 'Homeowner ID is required' });
      console.log('req.body', req.body);
      const data = await HomeownersService.updateHomeownerById(id, req.body);
      console.log('data', data);
      if (!data) return res.status(404).json({ error: 'Homeowner not found' });

      res.json(data);
    } catch (error) {
      console.error(error);
    }
  });
