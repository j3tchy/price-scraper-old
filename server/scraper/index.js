const fetch = require("node-fetch");
const cheerio = require("cheerio");

/**
 * Create method to scrape a site
 * Create a collection of websites which contains required information
 * Use forEach to run collection against method using interpolation to pass through values such as webpage, selectors, etc...
 * Use results from scrape to populate DB
 * Populate webpage with DB
 * 
 * Add loading states for displaying scraped sites
 * Use loading state to show number of sites scraped and remaining
 * Compare preices from previous scrape to suggest whether price is higher or lower
 * Grab latest check date to keep users informed of last scrape
 */

const getReddit = async () => {
    const res = await fetch("https://www.jdsports.co.uk/product/adidas-originals-nmdr1-shoes/16241607/");
    const body = await res.text();

    const $ = cheerio.load(body);

    const price = $('.itemPrices > .pri').text();

    console.log(price);
}

getReddit();