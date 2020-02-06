import express, { Application } from 'express';
import dotenv from 'dotenv';
import hbsExpress from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';

import routes from './routes/index';

// Express app
const app: Application = express();

// .env settings
dotenv.config();

// view settings
app.set('views', path.join(__dirname, '../views'));
const settings = hbsExpress.create({
  defaultLayout: 'layout', 
  extname: 'hbs'
});
app.engine('hbs', settings.engine);
app.set('view engine', 'hbs');

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static file
app.use('/static', express.static(path.join(__dirname, 'public')));

// Session settings
app.use(session({
  secret: process.env.SECRET_KEY,
  cookie: {
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: true
}));

// Route 
app.use(routes);

const port: number | string = process.env.PORT;

app.listen(port, () =>
  console.log(`http://localhost:${port}`));