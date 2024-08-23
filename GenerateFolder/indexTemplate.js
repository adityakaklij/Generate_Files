 function indexTemplate(stockName) {
    return `
  import React from 'react';
  
  const ${stockName} = () => {
    return (
      <div>
        <h1>${stockName}</h1>
        <p>Welcome to the stock page for ${stockName}.</p>
      </div>
    );
  };
  
  export default ${stockName};
    `;
  }

  module.exports = indexTemplate
  