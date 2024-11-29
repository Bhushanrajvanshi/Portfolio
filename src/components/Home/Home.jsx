import React from 'react'
import "./Home.css"
import mainImage from "../../../public/MainImage-removebg-preview.png"
import TypingEffect from 'react-typing-effect';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';

function Home() {

  useGSAP(() => {

    let t2 = gsap.timeline();

    t2.from(".line1", {
      x: -100,
      duration: 1,
      opacity: 0,
    })
    t2.from(".line2", {
      x: -100,
      duration: 1,
      opacity: 0,
    })
    t2.from(".line3", {
      x: -100,
      duration: 1,
      opacity: 0,
    })

    // t2.from("#home button", {
    //   y: 100,
    //   duration: 1,
    //   opacity: 0,
    // })

    t2.from(".rightHome", {
      x: 150,
      duration: 1,
      opacity: 0,
    });
  })
  return (
    <div id='home'>
      <div className="leftHome">
        <div className="homedetails">
          <div className="line1">Hello,&nbsp;I Am</div>
          <div className="line2">BHUSHAN RAJVANSHI</div>
          <div className="line3">
            <TypingEffect
              text={["SOFTWARE DEVELOPER", "WEB DEVELOPER", "FULL-STACK DEVELOPER"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={1000}
              cursor='|'
            />
          </div>

          <div className='hireme'>
            <Link to="contact" smooth={true} duration={1000} className='btn'>HIRE ME</Link>
          </div>

        </div>
      </div>

      <div className="rightHome">
        <img src={mainImage} alt="MainImage" />
      </div>

    </div>
  )
}

export default Home