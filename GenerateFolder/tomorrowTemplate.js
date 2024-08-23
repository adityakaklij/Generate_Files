function tomorrowTemplate(stockName) {
    return `
  import React from 'react';
  
  const TomorrowFor${stockName} = () => {
    return (
      <div>
        <h1>Tomorrow's Predictions for ${stockName}</h1>
        <p>Here are the stock predictions for ${stockName} for tomorrow.</p>
      </div>
    );
  };
  
  export default TomorrowFor${stockName};
    `;
  }
  
  module.exports = tomorrowTemplate