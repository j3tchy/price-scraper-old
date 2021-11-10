const mongoose = require("mongoose");
/**
 * Using the Model/Schema class exposed by mongoose to
 * create the scraper collection structure
 */

const scraperSchema = mongoose.Schema({
  item: String,
  originalPrice: Number,
  url: String,
  image: String,
  latestPrice: Number,
  dateChecked: Date,
});

module.exports = mongoose.model("scrapers", scraperSchema);
