import { Request, Response, Router } from 'express';

export default Router().get('/', async (req: Request, res: Response) => {
  try {
    res.json();
  } catch (error) {
    console.error(error);
  }
});
