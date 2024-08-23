const fs = require('fs');
const path = require('path');

// Import the templates for different pages
const indexTemplate = require('./indexTemplate');
const tomorrowTemplate = require('./tomorrowTemplate');
const sharePriceTargetsTemplate = require('./sharePriceTargetsTemplate');
const optionsTemplate = require('./optionsTemplate');

// Load the list of stocks from a JSON file
const stocks = require('../stocks.json');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'pages');

// Ensure the stocks directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate the folder and pages for each stock
stocks.forEach((stockName) => {
  const stockDir = path.join(pagesDir, stockName);

  // Create a folder for the stock if it doesn't exist
  if (!fs.existsSync(stockDir)) {
    fs.mkdirSync(stockDir, { recursive: true });
  }

  // Generate the index.js page
  fs.writeFileSync(
    path.join(stockDir, 'index.jsx'),
    indexTemplate(stockName),
    'utf8'
  );
  console.log(`Created: ${path.join(stockDir, 'index.jsx')}`);

  // Generate the tomorrow.js page
  fs.writeFileSync(
    path.join(stockDir, 'tomorrow.jsx'),
    tomorrowTemplate(stockName),
    'utf8'
  );
  console.log(`Created: ${path.join(stockDir, 'tomorrow.jsx')}`);

  // Generate the share-price-targets.js page
  fs.writeFileSync(
    path.join(stockDir, 'share-price-targets.jsx'),
    sharePriceTargetsTemplate(stockName),
    'utf8'
  );
  console.log(`Created: ${path.join(stockDir, 'share-price-targets.jsx')}`);

  // Generate the options.js page
  fs.writeFileSync(
    path.join(stockDir, 'options.jsx'),
    optionsTemplate(stockName),
    'utf8'
  );
  console.log(`Created: ${path.join(stockDir, 'options.jsx')}`);
});