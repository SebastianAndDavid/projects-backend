import { Request, Response, Router } from 'express';
import ProjectsService from '../services/ProjectsService';

export default Router()
  .post('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await ProjectsService.createProjectWithHomeowner(
        req.body,
        id,
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
  })
  .get('/homeowners/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await ProjectsService.getProjectWithHomeowner(id);
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  });
