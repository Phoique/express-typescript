import express, { Router } from 'express';

import * as indexRoute from '../controllers/index';

const router: Router = express.Router();

router.get('/', indexRoute.index);

export default router;