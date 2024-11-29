import React from 'react'
import "../../App.css"


function SkillCard({title, image}) {

  return (
    <div className='skillCard'>
        <h2>{title}</h2>
        <div className="hoverSkillCard">
            <img src={image} alt="SkillImage" />
        </div>
    </div>
  )
}

export default SkillCard