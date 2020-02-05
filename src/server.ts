import express from "express";
import routes from './routes/index';

// Express app
const app = express();

// Route 
app.use(routes);

app.listen(3000);