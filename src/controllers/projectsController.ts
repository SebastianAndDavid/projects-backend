import { Request, Response, Router } from 'express';
import ProjectsService from '../services/ProjectsService';

export default Router().post('/', async (req: Request, res: Response) => {
  try {
    const data = await ProjectsService.createProjectWithHomeowner(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});
