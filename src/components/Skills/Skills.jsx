import "./Skills.css"
import CSS from "../../../public/css.png"
import HTML from '../../../public/html.png'
import JavaScript from '../../../public/javascript.png'
import ReactJS from '../../../public/react.png'
import Node from '../../../public/node.png'
import Express from '../../../public/express.png'
import MongoDB from '../../../public/mongodb.png'
import MySql from '../../../public/mysql.png'
import PostMan from '../../../public/PostMan.png'
import SkillCard from "../Card/SkillCard"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Skills() {

  useGSAP(() => {

    gsap.from("#skills h1", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#skills h1",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".skill-content", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".skill-content",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })
  })
  
  return (
    <div id='skills'>
      <h1>Technical Proficiency</h1> 
      <div className="skill-content">
        <SkillCard title="HTML" image={HTML} />
        <SkillCard title="CSS" image={CSS} />
        <SkillCard title="JavaScript" image={JavaScript} />
        <SkillCard title="React.JS" image={ReactJS} />
        <SkillCard title="Node.JS" image={Node} />
        <SkillCard title="Express.JS" image={Express} />
        <SkillCard title="PostMan" image={PostMan} />
        <SkillCard title="MongoDB" image={MongoDB} />
        <SkillCard title="MySQL" image={MySql} />
      </div>

    </div>
  )
}

export default Skills