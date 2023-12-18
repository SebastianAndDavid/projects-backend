import { Request, Response, Router } from 'express';
import ProjectsService from '../services/ProjectsService';

export default Router()
  .post('/', async (req: Request, res: Response) => {
    try {
      const data = await ProjectsService.createProjectWithManyHomeowners(
        req.body,
      );
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/all', async (req: Request, res: Response) => {
    try {
      const data = await ProjectsService.getAllProjects();

      if (!data) return res.status(404).json({ error: 'No projects found' });

      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ error: 'Project ID is required' });

      const data = await ProjectsService.getProjectByIdWithHomeowner(id);

      if (!data) return res.status(404).json({ error: 'Project not found' });

      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .get('/homeowners/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id)
        return res.status(400).json({ error: 'Homeowner ID is required' });

      const data = await ProjectsService.getProjectWithHomeowner(id);

      if (!data) return res.status(404).json({ error: 'Project not found' });

      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .put('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ error: 'Project ID is required' });

      const data = await ProjectsService.updateProjectById(id, req.body);

      if (!data) return res.status(404).json({ error: 'Project not found' });

      res.json(data);
    } catch (error) {
      console.error(error);
    }
  })
  .delete('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ error: 'Project ID is required' });

      const data = await ProjectsService.deleteProjectById(id);
      res.json(data);
    } catch (error) {
      console.error(error);
    }
  });
