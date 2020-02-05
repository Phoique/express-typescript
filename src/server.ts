import express, { Application } from "express";
import dotenv from 'dotenv';
import hbsExpress from 'express-handlebars';
import path from 'path';

import routes from './routes/index';

// Express app
const app: Application = express();

// .env settings
dotenv.config();

// view settings
app.set("views", path.join(__dirname, "../views"));
const settings = hbsExpress.create({
  defaultLayout: 'layout', 
  extname: 'hbs'
});
app.engine('hbs', settings.engine);
app.set('view engine', 'hbs');

// Static file
app.use('/static', express.static(path.join(__dirname, "public")));

// Route 
app.use(routes);

app.listen(process.env.PORT, () => 
  console.log(`http://localhost:${process.env.PORT}`));