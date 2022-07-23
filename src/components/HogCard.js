import React from 'react'
import {useState} from "react"
import HogDetails from './HogDetails';

function HogCard({hog}) {
  
    const [showDetails, setShowDetails] = useState(false)

    const {name, image, greased, specialty, weight} = hog;
    const medal = hog["highest medal achieved"];
  
    const toggleDetails=event=>{setShowDetails(!showDetails)}

    return (
        <div id ={name}>
            <h1>{name}</h1>
             <img src={image} alt={name} height={100} onClick ={toggleDetails}/>
             {showDetails ? (<HogDetails 
                                name={name} 
                                weight={weight} 
                                specialty = {specialty} 
                                medal={medal} 
                                greased={greased}/>)
                          : null}
        </div>
    )
}

export default HogCard