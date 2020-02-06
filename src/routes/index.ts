import express, { Router } from 'express';

import * as indexRoute from '../controllers/index';
import errorRoute from '../controllers/error';

const router: Router = express.Router();

router.get('/', indexRoute.index);

// Error 404
router.use(errorRoute);

export default router;