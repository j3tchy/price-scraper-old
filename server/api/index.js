const express = require("express");
const apiRouter = express.Router();
const scraperRouter = require('./scrapers');
const bodyParser = require('body-parser');

apiRouter.use('/api', scraperRouter);

module.exports = apiRouter;


// /**
// * 0.1 - Create Logger to console log time, req, status
// * 
// * 1. GET '/scrapers' - Retrieve scraped websites from database
// * 2. GET '/scrapers/:id' - Retrieve scraped website with ID (x)
// * 3. POST '/scrapers' - Create a new scraper
// * 4. PUT '/scrapers/:id' - Update scraper with ID (x)
// * 5. DELETE '/scrapers/:id' - Delete scraper with ID (x)
// * 
// * STRETCH:
// * Include authorisation/authentication
// */