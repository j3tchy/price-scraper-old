const express = require('express');
const API = require('./contants');
const connectDB = require('../db/index.js');

const router = require('./router');

const logger = (req, res, next) => {
  console.log(`Request: ${req.method} - URL: ${req.originalUrl} - ${new Date}`);
  next();
}

connectDB(() => {
  const app = express();
  const port = 9000;

  app.use(logger);

  app.use(API.BASE, router);

  app.listen(port, () => {
    console.log(`Scraper API listening at http://localhost:${port}`)
  });
})

/**
* 0.1 - Create Logger to console log time, req, status
* 
* 1. GET '/scrapers' - Retrieve scraped websites from database
* 2. GET '/scrapers/:id' - Retrieve scraped website with ID (x)
* 3. POST '/scrapers' - Create a new scraper
* 4. PUT '/scrapers/:id' - Update scraper with ID (x)
* 5. DELETE '/scrapers/:id' - Delete scraper with ID (x)
* 
* STRETCH:
* Include authorisation/authentication
*/
