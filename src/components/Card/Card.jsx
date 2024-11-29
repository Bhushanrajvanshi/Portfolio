import React from 'react'
import "../../App.css"

function Card({title, image}) {
  return (
    <div id='card'>
      <h1>{title}</h1>
      <div className="hoverCard">
        <img src={image} alt="MernImage" />
      </div>
    </div>
  )
}

export default Card