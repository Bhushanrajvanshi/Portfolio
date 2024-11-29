import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import JavaScript from '../../../public/javascript.png'
import react from '../../../public/react.png'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(() => {

    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".aboutDetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutDetails h1",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })
    
    gsap.from(".aboutDetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutDetails ul",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".rightAbout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightAbout",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 20%"
      }
    })

  })

  return (
    <div id='about'>
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutDetails">
          <div className="personalInfo">
            <h1>Personal Info</h1>
            <ul>
              <li> <span>Name :</span> Bhushan Rajvanshi</li>
              <li> <span>Age :</span> 22 Years</li>
              <li> <span>Gender :</span> Male</li>
              <li> <span>Language Known :</span> Hindi, English</li>
            </ul>
          </div>

          <div className="educationInfo">
            <h1>Education</h1>
            <ul>
              <li> <span>Degree :</span> BCA</li>
              <li> <span>Branch :</span> Bachelor Of Computer Application</li>
              <li> <span>CGPA :</span> 7.3</li>
            </ul>
          </div>

          <div className="skillsInfo">
            <h1>Skills</h1>
            <ul>
              <li> MERN Full-Stack Developer </li>
              <li> JavaScript </li>
              <li> React.JS </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightAbout">
        <Card title={"MERN Full-Stack Developer"} image={mern}/>
        <Card title={"JavaScript"} image={JavaScript}/>
        <Card title={"React.JS"} image={react}/>
      </div>
    </div>
  )
}

export default About