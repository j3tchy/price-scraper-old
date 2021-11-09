/**
 * Router is isolated so can be used to set up routes and passed
 * through as middleware
 */
const express = require("express");
const router = express.Router();

const Scraper = require('../db/Models/scraper');
const API = require('./contants');

router.get(API.API_SCRAPERS, async (req, res) => {
  // Find all
  const scrapers = await Scraper.find({});
  res.send(scrapers);
});

// app.get(API.API_SCRAPERS, (req, res) => {
//   // Find all
//   //db.scrapers.find({})
// });

// app.get(API.API_SCRAPER, (req, res) => {
//   // console.log(req.params.id);
//   // Find by Id (req.params.id)
//   //db.scrapers.find({"id": req.params.id})
// });

// app.post(API.API_SCRAPERS, (req, res) => {
//   // Create new scraper
//   //db.scrapers.insert({ req.body });
// });

// app.put(API.API_SCRAPER, (req, res) => {
//   // Update scraper with an ID (n)
//   //db.scrapers.update({"id": req.params.id}, {req.body});
// });

// app.delete(API.API_SCRAPER, (req, res) => {
//   // Delete sceaper with ID (n)
//   //db.scrapers.remove({"id": req.params.id})
// });


module.exports = router;