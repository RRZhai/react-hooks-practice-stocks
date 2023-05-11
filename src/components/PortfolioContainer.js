import React, {useState} from "react";
import Stock from "./Stock";


function PortfolioContainer({selectStock, handleSelect}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      <div>{selectStock.map(stock => <Stock handleSelect={handleSelect} key={stock.id} stock={stock}/>)}
      </div>
    </div>
  );
}

export default PortfolioContainer;
