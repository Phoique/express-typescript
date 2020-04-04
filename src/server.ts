import express, { Application } from 'express';
import dotenv from 'dotenv';
import hbsExpress from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';

import routes from './routes/index';

import './entity';

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
const secretKey: string = process.env.SECRET_KEY || 'secret123';

app.use(session({
  secret: secretKey,
  cookie: {
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: true
}));

// Route 
app.use(routes);

const port: number | string = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`http://localhost:${port}`));