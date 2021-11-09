
const BASE = '/api';

const SLUGS = {
  SCRAPERS: 'scrapers',
  SCRAPERS_ID: ':scraperId'
}

const API_SCRAPERS = `/${SLUGS.SCRAPERS}`;
const API_SCRAPER = `${API_SCRAPERS}/${SLUGS.SCRAPERS_ID}`;

const API = {
  BASE,
  API_SCRAPERS,
  API_SCRAPER
};

module.exports = API;