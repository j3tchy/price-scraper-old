const express = require('express');
const apiRouter = require('./api');

const connectDB = require('../db');

connectDB(() => {
  const PORT = 9000;
  const app = express();

  app.use(express.json());

  app.use('/', apiRouter);
  
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`)
  });
})
