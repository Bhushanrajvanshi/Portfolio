import './Project.css'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import ProjectFirst from "../Card/ProjectFirst";
import ProjectSecond from "../Card/ProjectSecond";
import ThirdProject from "../Card/ThirdProject";
import FourthProject from "../Card/FourthProject";
import FifthProject from "../Card/FifthProject";
gsap.registerPlugin(ScrollTrigger)

function Project() {

  useGSAP(() => {

    gsap.from("#projects h3", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#projects h3",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })

  })

  return (
    <div id='projects'>
      <h3>1+ YEARS EXPERIENCED IN PROJECTS</h3>
      <div className="slider">
        < ProjectFirst />
        <ProjectSecond />
        <ThirdProject />
        <FourthProject />
        <FifthProject />
      </div>
    </div>
  )
}

export default Project