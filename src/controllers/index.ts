import { Request, Response } from 'express';

function index(request: Request, response: Response) {
  response.render('index');
}

export { index };