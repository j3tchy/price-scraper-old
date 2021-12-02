const express = require('express');
const apiRouter = require('./api');
const bodyParser = require('body-parser');
const cors = require('cors');


const connectDB = require('../db');

connectDB(() => {
  const PORT = 9000;
  const app = express();

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/', apiRouter);
  
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`)
  });
})
