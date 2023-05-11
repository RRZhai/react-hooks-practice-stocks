import React, {useState} from "react";

function Stock({stock, handleSelect}) {
  return (
    <div>
      <div onClick={() => handleSelect(stock)} className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">${stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
