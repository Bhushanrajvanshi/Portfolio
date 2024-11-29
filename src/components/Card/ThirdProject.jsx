import React from 'react'
import './ProjectCard.css'
import ProjectImage from '../../../public/Project-Image.jpg';

function ThirdProject() {
  return (
    <div className='projectCard'>
        <div className="imageSection">
            <img src={ProjectImage} alt="Project-Image" />
        </div>

        <div className="AboutProject">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae qui dignissimos nisi reprehenderit velit rem officia temporibus facere nobis earum, harum enim eligendi sequi aperiam provident numquam sed ad corrupti?</p>
          <a href='#' target='_blank'>Soon...</a>
       </div>
    </div>
  )
}

export default ThirdProject