import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [selectStock, setSelectStock] = useState([])
  const [stocks, setStocks] = useState([])
  const [filterType, setfilterStocks] = useState('All')
  const [sort, setSort] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(stockList => setStocks(stockList))
  }, [])

  const handleSelect = (selected) => {
    const foundStock = selectStock.find(stock => stock.id === selected.id)
    if(!foundStock) return setSelectStock([...selectStock, selected])
  }

  const handleRemove = (selected) => {
    setSelectStock(selectStock.filter(stock => stock.id !== selected.id))
  }

  const handleFilter = (filter) => {
    setfilterStocks(filter)
  }

  const filteredStocks = filterType ==='All' ? stocks : stocks.filter(stock => stock.type === filterType)
  const filteredSelectStocks = filterType ==='All' ? selectStock : selectStock.filter(stock => stock.type === filterType)

  const handleSort = (sortBy) => {
    setSort(sortBy)
  }

  const compareStocks = (stock1, stock2) => {
    if (sort === 'Alphabetically'){
      if (stock1.name < stock2.name){
        return -1
      } else if (stock1.name > stock2.name){
        return 1
      } return 0
    } else if (sort === 'Price'){
      if(stock1.price < stock2.price){
        return -1
      } else if (stock1.price > stock2.price){
        return 1
      } return 0
    }
  }

  const sortedStocks = filteredStocks.sort(compareStocks)
  const sortedBoughtStocks = filteredSelectStocks.sort(compareStocks)

  return (
    <div>
      <SearchBar handleFilter={handleFilter} handleSort={handleSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} handleSelect={handleSelect}/>
        </div>
        <div className="col-4">
          <PortfolioContainer selectStock={sortedBoughtStocks} handleSelect={handleRemove} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
