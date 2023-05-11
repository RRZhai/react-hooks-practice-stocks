import React, {useEffect, useState} from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleSelect}) {
  
  return (
    <div>
      <h2>Stocks</h2>
    {stocks.map(stock => <Stock key={stock.id} handleSelect={handleSelect} stock={stock}/>)}
    </div>
  );
}

export default StockContainer;
