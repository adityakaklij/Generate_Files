function sharePriceTargetsTemplate(stockName) {
    return `
  import React from 'react';
  
  const SharePriceTargetsFor${stockName} = () => {
    return (
      <div>
        <h1>Share Price Targets for ${stockName}</h1>
        <p>Here are the share price targets for ${stockName}.</p>
      </div>
    );
  };
  
  export default SharePriceTargetsFor${stockName};
    `;
  }
  
  
  module.exports = sharePriceTargetsTemplate