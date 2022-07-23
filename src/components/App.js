import React from "react";
import {useState} from "react"
import Nav from "./Nav";
import hogs from "../porkers_data";
import { HogContainer } from "./HogContainer";
import HogFilter from "./HogFilter";


function App() 
{
	const [showGreased, setShowGreased] = useState(false)

	//will only be true on page load or reset.
	const [showAll, setShowAll] = useState(true)

	const [sortBy, setSortBy]=useState("")

	const toggleGreased=()=>
	{
		if(showAll)
		{setShowAll(!showAll)}

		setShowGreased(!showGreased)
	}

	const sortHogs = ()=>
	{
		return filterHogs().sort((currentHog,nextHog)=>{
			if(sortBy =="")
			{return filterHogs()} 
			
			else
			{
				if(sortBy =="name")
				{
					if(currentHog.name <nextHog.name)
					{return -1}
					else
					{return 1}
				}
			
				else if(sortBy == "weight")
				{
					if(currentHog.weight <nextHog.weight)
					{return -1}
					else
					{return 1}
				}
			}			
		})
	}

	const filterHogs = ()=>
	{
		if(showGreased)
		{return hogs.filter(hog=>{return hog.greased})}

		else if(showAll)
		{return hogs}

		else
		{return hogs.filter(hog=>{return !hog.greased})}
	}

	return (
		<div className="App">
			<Nav />
			<HogFilter showGreased={showGreased} showAll = {showAll} toggleGreased={toggleGreased} sortBy = {sortBy} setSortBy={setSortBy}/>
			<HogContainer hogs={sortHogs()}/>
		</div>
	);
}

export default App;
