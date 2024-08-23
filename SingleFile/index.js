const fs = require('fs');
const path = require('path');

// Load the list of stocks from a JSON file
const stocks = require('../stocks.json');

// Define the template for each page
const pageTemplate = (stockName) => `
import React from 'react';

const ${stockName} = () => {
  return (
    <div>
      <h1>${stockName}</h1>
      <p>This is the page for ${stockName}.</p>
    </div>
  );
};

export default ${stockName};
`;

// Path to the pages directory
const pagesDir = path.join(__dirname, 'pages');

// Ensure the stocks directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate a page for each stock
stocks.forEach((stockName) => {
  const filePath = path.join(pagesDir, `${stockName}.jsx`);
  
  // Write the page template to a new file
  fs.writeFileSync(filePath, pageTemplate(stockName), 'utf8');
  console.log(`Created: ${filePath}`);
});
