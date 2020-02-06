import express, { Router } from 'express';

import * as indexRoute from '../controllers/index';
import * as authRoute from '../controllers/auth';
import * as profileRoute from '../controllers/profile';
import * as authMiddleware from '../middleware/auth';
import errorRoute from '../controllers/error';

const router: Router = express.Router();

// Middleware
router.get('/login', authMiddleware.isLogin, authRoute.index);
router.get('/profile', authMiddleware.isAuth, profileRoute.index);

// Http get methods
router.get('/', indexRoute.index);

// Http post methods
router.post('/login', authMiddleware.isLogin, authRoute.post);

// Error 404
router.use(errorRoute);

export default router;