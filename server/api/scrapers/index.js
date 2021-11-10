const express = require("express");
const scraper = require("../../../db/Models/scraper");
const scraperRouter = express.Router();

const Scraper = require('../../../db/Models/scraper');

scraperRouter.get("/scrapers", async (req, res) => {
  const scrapers = await Scraper.find();
  res.send(scrapers);
});

scraperRouter.get("/scrapers/:scraperId", async (req, res) => {
  const scraper = await Scraper.findById(req.params.scraperId);
  res.send(scraper);
});

scraperRouter.post("/scrapers", async (req, res) => {
  const scraper = new Scraper({
    item: req.body.item,
    originalPrice: req.body.price,
    url:req.body.url,
    image: req.body.image,
    latestPrice: req.body.latestPrice,
    dateChecked: new Date(),
  })

  await scraper.save();
  res.send(scraper);
});

scraperRouter.put("/scrapers/:scraperId", async (req, res) => {
  const scraper = Scraper.findByIdAndUpdate(req.params.scraperId, { ...req.body });
  res.send(scraper);
});

scraperRouter.delete("/scrapers/:scraperId", async (req, res) => {
  const scraper = Scraper.findByIdAndDelete(req.params.scraperId);
  res.send(scraper);
});

module.exports = scraperRouter;