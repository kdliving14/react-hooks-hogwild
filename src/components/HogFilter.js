import React from 'react'

function HogFilter({showGreased, toggleGreased, showAll, sortBy, setSortBy}) 
{  
    const selectSortCondition=(event)=>
    {
        let newSortCondition = event.target.value;
        setSortBy(newSortCondition)
    }
  
    return (
    <div id="filter-bar"> 
      <span>FILTER SETTINGS: </span>
      <select id="sort-hogs" onChange={selectSortCondition}>
        <option selected = "selected" value="">Default</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      {" "}
      <label for="greased">Greased?</label>
      <input defaultChecked={showAll ? false : showGreased} onChange={toggleGreased} type="checkbox" id="greased" name = "greased"></input>
    </div>
  )
}

export default HogFilter