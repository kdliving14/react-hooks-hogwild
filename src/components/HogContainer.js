import React from 'react'
import HogCard from './HogCard'

export const HogContainer = ({hogs}) => 
{
    const mappedHogs = () => 
    {return hogs.map(hog =>{return <HogCard hog={hog}/>})}
    return <div id="hog-container">{mappedHogs()}</div>
}

export default HogContainer