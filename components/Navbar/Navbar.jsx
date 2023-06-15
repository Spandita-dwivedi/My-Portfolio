import React from "react";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnchorLink from "react-anchor-link-smooth-scroll";

import styles from "./Navbar.module.scss"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineBulb } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FiCamera } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Image from "next/image";


import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';




export default function Navbarcomp() {
  let fix;
  if (typeof window !== "undefined") {
    fix = window.innerWidth;
  }

  const [windowWidth, setWindowWidth] = useState(fix);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleMouseClicked = () => {
    setIsClicked(!isClicked);
  };

  if (windowWidth > 900) {
    return (
      <>
      
        <div>
          <nav className={styles.nav} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            <div className={styles.iconnav}>
              
              
              <AnchorLink href='#mainn'>
                <div className={styles.icon}><AiOutlineHome /></div>
                </AnchorLink>
              
             
                
              
              <AnchorLink href='#gal'>
                <div className={styles.icon}><FiCamera /></div>
              </AnchorLink>

              <AnchorLink href='#pro'>
                <div className={styles.icon}><AiOutlineBulb /></div>
              </AnchorLink>

              
              <AnchorLink href='#vert'>
                <div className={styles.icon}><BsPerson /></div>
              </AnchorLink>

              
            </div>
            <div className={styles.social}>
              <Link href="https://www.instagram.com/spandita.dw/">
                <div className={styles.icon}><FiInstagram /></div>
              </Link>
              <Link href="https://www.linkedin.com/in/spandita-dwivedi-a97789246/">
                <div className={styles.icon}><AiOutlineLinkedin /></div>
              </Link>
              <Link href="https://github.com/Spandita-dwivedi">
                <div className={styles.icon}><BsGithub /></div>
              </Link>
            </div>
          </nav>
          
        </div>
        
      </>
    );
  }
  return (
    <>
      <nav className={styles.nav3}>
        <div className={styles.burger}>
         
          <div className={styles.img1} onClick={handleMouseClicked}>
            <h1 className={styles.hea}>Spandita</h1>
          </div>
          <div className={styles.img} onClick={handleMouseClicked}>
            <AiOutlineMenu />
          </div>
        </div>
        {isClicked &&
          <div >
            <div className={styles.iconnav}>
              <Link href="/">
                <div className={styles.icon}>Home</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '35vw' , borderBottom:'none'}} />
              <Link href="">
                <div className={styles.icon}>Walkway</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '35vw', borderBottom:'none' }} />
              <Link href="">
                <div className={styles.icon}>Projects</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '35vw', borderBottom:'none' }} />
              <Link href="">
                <div className={styles.icon}>About</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '35vw', borderBottom:'none'}} />
              <div className={styles.list}>
                <Link href="">
                  <div className={styles.icon}><BsInstagram />Instagram</div>
                </Link>
                <Link href="https://www.linkedin.com/in/spandita-dwivedi-a97789246/">
                  <div className={styles.icon}><AiOutlineLinkedin />LinkedIn</div>
                </Link>
                <Link href="https://github.com/Spandita-dwivedi">
                  <div className={styles.icon}><BsGithub />Github</div>
                </Link>
              </div>
            </div>
          </div>
        }
      </nav>
    </>
  )
}