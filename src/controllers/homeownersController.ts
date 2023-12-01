import { Request, Response, Router } from 'express';

export default Router().post('/', async (req: Request, res: Response) => {
  res.json();
});
