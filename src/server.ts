import express from "express";
import dotenv from 'dotenv';

import routes from './routes/index';

// Express app
const app = express();

// .env settings
dotenv.config();

// Route 
app.use(routes);

app.listen(process.env.PORT, () => 
  console.log(`http://localhost:${process.env.PORT}`));