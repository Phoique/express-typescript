import { Request, Response } from 'express';

function index(request: Request, response: Response) {
  response.render('auth/profile', {
    username: request.session.username
  });
}

export { index };