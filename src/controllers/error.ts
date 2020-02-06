import { Request, Response, NextFunction } from 'express';

function indexError(request: Request, response: Response, next: NextFunction) {
  return response.status(404).render('error/404');
}

export default indexError;
