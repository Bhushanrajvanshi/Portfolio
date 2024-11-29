import React from 'react'
import './ProjectCard.css'
import ProjectImage from '../../../public/Project-Image.jpg';
import LinkedIn from '../../../public/LinkedIn.png'

function ProjectFirst() {
  return (
    <div className='projectCard'>
        <div className="imageSection">
            <img src={LinkedIn} alt="Project-Image" />
        </div>

        <div className="AboutProject">
          <p>LinkedIn is a professional networking site and social media platform.  designed with the latest in web technology. Utilizing the powerful Next.js framework alongside Express.js, it offers users a fluid and engaging experience. MongoDB serves as the backbone for data storage, ensuring scalability and performance.</p>
          <a href='https://github.com/Bhushanrajvanshi/LinkedIn' target='_blank'>Source code</a>
       </div>
    </div>
  )
}

export default ProjectFirst