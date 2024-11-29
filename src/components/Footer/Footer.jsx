import React from 'react'
import "./Footer.css"

import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Footer() {

  useGSAP(() => {

    let t1 = gsap.timeline();

    t1.from("footer",{
      y: 100,
      duration: 1,
      opacity: 0,
    })

    t1.from("footer a",{
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.5,
    })

    t1.from(".footerLine",{
      y: 100,
      duration: 1,
      opacity: 0,
    })

    t1.from(".firstPara",{
      x: -100,
      duration: 1,
      opacity: 0,
    })

    t1.from(".secondPara",{
      x: 100,
      duration: 1,
      opacity: 0,
    })

  })

  return (
    <footer>
      <div className="icons">
        <a href="https://www.linkedin.com/in/bhushan-rajvanshi-723a0b251/" className='linkedin SKY' target='_blank'> <BsLinkedin /> </a>
        <a href="https://x.com/BhushanKum2001" className='twitter BLACK' target='_blank'> <FaSquareXTwitter /> </a>
        <a href="https://www.instagram.com/hi_bhushan_here05/" className='instagram RED' target='_blank'> <FaInstagram /> </a>
        <a href="https://www.facebook.com/profile.php?id=100065299453798" className='facebook SKY' target='_blank'> <FaFacebookSquare /> </a>
      </div>

      <div className='footerLine'></div>

      <div className="copyright">
        <p className='firstPara'>&copy; 2024 All rights reserved.</p>
        <p className='secondPara'>Made with ❤️ by <span>Bhushan Rajvanshi !</span></p>
      </div>
    </footer>

  )
}

export default Footer