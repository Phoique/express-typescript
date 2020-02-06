import { Request, Response, NextFunction } from 'express';

function isAuth (request: Request, response: Response, next: NextFunction) {
  if (request.session.username && request.session.role === 'admin') {
    next();
  } else {
    response.redirect('/login');
  }
}

function isLogin (request: Request, response: Response, next: NextFunction) {
  if (request.session.username && request.session.role === 'admin') {
    response.redirect('/profile/');
  } else {
    next();
  }
}

export { isAuth, isLogin };