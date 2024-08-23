function optionsTemplate(stockName) {
    return `
  import React from 'react';
  
  const OptionsFor${stockName} = () => {
    return (
      <div>
        <h1>Options Data for ${stockName}</h1>
        <p>Here is the options data for ${stockName}.</p>
      </div>
    );
  };
  
  export default OptionsFor${stockName};
    `;
  }
module.exports = optionsTemplate