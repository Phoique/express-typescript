import { Request, Response } from 'express';

function index(request: Request, response: Response) {
  response.send('Hello World');
}

export { index };