import { Request, Response, Router } from 'express';

export default Router().post('/', async (req: Request, res: Response) => {
  try {
    res.json();
  } catch (error) {}
});
