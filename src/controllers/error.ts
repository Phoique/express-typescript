import { Request, Response } from 'express';

function indexError(request: Request, response: Response) {
  return response.status(404).render('error/404');
}

export default indexError;
