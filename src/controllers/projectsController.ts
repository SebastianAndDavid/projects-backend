import { Request, Response, Router } from 'express';
import ProjectsService from '../services/ProjectsService';

export default Router()
  .post('/:homeownerId', async (req: Request, res: Response) => {
    try {
      const { homeownerId } = req.params;
      const data = await ProjectsService.createProjectWithHomeowner(
        req.body,
        homeownerId,
      );
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/all', async (req: Request, res: Response) => {
    try {
      const data = await ProjectsService.getAllProjects();
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await ProjectsService.getProjectById(id);
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  });
