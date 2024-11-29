import { Link } from 'react-scroll'
import './Navbar.css'
import { useEffect, useRef, useState } from 'react';

import NavImage from '../../../public/NavImage.jpg';

import { PiSunHorizonFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {

    useGSAP(() => {
        let t1 = gsap.timeline();
    
        t1.from("nav .leftSide",{
          y: -100,
          duration: 1,
          opacity: 0,
        })
    
        t1.from("nav .desktop li",{
          y: -100,
          duration: 1,
          opacity: 0,
          stagger: 0.5,
        })

        t1.from("nav .desktop .darkMore",{
            y: -100,
            duration: 1,
            opacity: 0,
        })
    })

    let menuref = useRef();
    let mobileref = useRef();
    
    const [dark, setDark] = useState(false);
    const [darkTheme, setDarkTheme] = useState("light-theme");

    const handleClick = () => {
        darkTheme === "light-theme" ? setDarkTheme("dark-theme") : setDarkTheme("light-theme");
        setDark(!dark);
      }
    
      useEffect(() => {
        document.body.className = darkTheme;
      }, [darkTheme]);

  return (
    <nav>
        <div className="leftSide">
            <div className="logo">
                <img src={NavImage} alt="Logo-Image" />
            </div>
            <div className="name">
                <h1>BHUSHAN</h1>
                <p>Software Engineer</p>
            </div>
        </div>

        <ul className='desktop'>
            <Link to='home' smooth={true} duration={500} activeClass='active' spy={true} > <li>Home</li> </Link>
            <Link to='about' smooth={true} duration={500} activeClass='active' spy={true} > <li>About</li> </Link>
            <Link to='skills' smooth={true} duration={500} activeClass='active' spy={true} > <li>Skills</li> </Link>
            <Link to='projects' smooth={true} duration={500} activeClass='active' spy={true} > <li>Projects</li> </Link>
            <Link to='contact' smooth={true} duration={500} activeClass='active' spy={true} > <li>Contact</li> </Link>
            <div className='darkMore' onClick={handleClick}>
                {!dark ? <PiSunHorizonFill className='sun' /> : <BsFillMoonStarsFill className='moon' />}
            </div>
        </ul>

        <div className="menu" ref={menuref} onClick={() => {
            mobileref.current.classList.toggle('activemenu');
            menuref.current.classList.toggle('activeline');
        }}>
            <div className="menuline"></div>
            <div className="menuline"></div>
            <div className="menuline"></div>
        </div>

        <ul className='mobile' ref={mobileref}>
            <Link to='home' smooth={true} duration={500} activeClass='active' spy={true} > <li>Home</li> </Link>
            <Link to='about' smooth={true} duration={500} activeClass='active' spy={true} > <li>About</li> </Link>
            <Link to='skills' smooth={true} duration={500} activeClass='active' spy={true} > <li>Skills</li> </Link>
            <Link to='projects' smooth={true} duration={500} activeClass='active' spy={true} > <li>Projects</li> </Link>
            <Link to='contact' smooth={true} duration={500} activeClass='active' spy={true} > <li>Contact</li> </Link>
        </ul>
    </nav>
  )
}

export default Navbar