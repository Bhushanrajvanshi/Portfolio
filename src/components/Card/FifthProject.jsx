import React from 'react'
import './ProjectCard.css'
import ProjectImage from '../../../public/Project-Image.jpg';


function FifthProject() {
  return (
    <div className='projectCard'>
        <div className="imageSection">
            <img src={ProjectImage} alt="Project-Image" />
        </div>

        <div className="AboutProject">
          <p>ByteSphere is a premier tech blog that harnesses the power of Next.js 14, MongoDB, TailwindCSS, and TypeScript to provide authors with a sophisticated platform for sharing insights into the tech industry. With a dedicated dashboard for authors to manage their content, ByteSphere ensures a seamless publishing experience.</p>
          {/* <p> Readers can enjoy a curated selection of articles on the latest tech trends, all presented with an engaging interface and the option for dark mode viewing</p> */}
          <a href='#' target='_blank'>Soon...</a>
       </div>
    </div>
  )
}

export default FifthProject