import React from 'react'
import './ProjectCard.css'
import ProjectImage from '../../../public/Project-Image.jpg';

function FourthProject() {
  return (
    <div className='projectCard'>
        <div className="imageSection">
            <img src={ProjectImage} alt="Project-Image" />
        </div>

        <div className="AboutProject">
          <p>Nextshare is a vibrant social media platform, designed with the latest in web technology. Utilizing the powerful Next.js framework alongside Express.js, it offers users a fluid and engaging experience. MongoDB serves as the backbone for data storage, ensuring scalability and performance. </p>
          {/* <p>Security is a top priority, with jsonwebtoken providing robust authentication to protect user data and privacy. Nextshare stands as a testament to modern social networking, where connectivity and security go hand in hand.</p> */}
          <a href='#' target='_blank'>Soon...</a>
       </div>
    </div>
  )
}

export default FourthProject