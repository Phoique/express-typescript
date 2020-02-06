import express, { Router } from 'express';

import * as indexRoute from '../controllers/index';
import * as authRoute from '../controllers/auth';
import * as profileRoute from '../controllers/profile';
import errorRoute from '../controllers/error';

const router: Router = express.Router();

// Http get methods
router.get('/', indexRoute.index);
router.get('/login', authRoute.index);
router.get('/profile', profileRoute.index);

// Http post methods
router.post('/login', authRoute.post);

// Error 404
router.use(errorRoute);

export default router;