import { Request, Response } from 'express';

function index(request: Request, response: Response) {
  response.render('auth/login');
}

function post(request: Request, response: Response) {
  console.log(request.body);
}

export { index, post };