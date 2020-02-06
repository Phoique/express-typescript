import { Request, Response } from 'express';

function index(request: Request, response: Response) {
  response.render('auth/login');
}

function post(request: Request, response: Response) {
  const defaultUsername: string = 'admin';
  const username: string = request.body.username;
  if(defaultUsername === username) {
    request.session.username = username;
    request.session.role = 'admin';
    response.redirect('/profile');
  }
  else {
    response.redirect('/login');
  }
}

export { index, post };