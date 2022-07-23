import React from 'react'

const HogDetails = ({name, weight, specialty, greased, medal}) => 
{
  return 
  (
    <div id ={`details-${name}`}>
      <p>
        Weight: {weight}<br></br>
        Specialty: {specialty}<br></br>
        {greased ? "GREASED" : "CLEAN"}<br></br>
        Highest Medal Achieved: {medal}
      </p>
    </div>
  )
}

export default HogDetails