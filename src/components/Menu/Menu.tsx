"use client"

import React, { useState, useRef, useEffect, use} from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import "./Menu.css";

interface MenuProps {
  // Add your props here
}

const menuLinks = [ 
  { name: "Home", path: "/" },
  { name: "Introduction", path: "/introduction" },
  { name: "Work", path: "/work" },
  { name: "Lab", path: "/lab" },

];

const Menu: React.FC<MenuProps> = ({  }) => {
  const container = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => { 
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        duration: 1,
        y: 0,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      })
  },{ scope: container });
  
useEffect(() => {
  menuOpen ? tl.current!.play() : tl.current!.reverse()
  console.log("menuOpen: ", menuOpen)
}, [menuOpen]);

  return (
    <div className='menu-container' ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Nils Goecke</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo" >Nils Goecke</div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>close</p>
          </div>
        </div>
        <div className="menu-close-icon">
         <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
    	    <div className="menu-links">
            {menuLinks.map((link, index) => (

              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                <Link className='menu-link' href={link.path}>
                  {link.name}
                 </Link>
                </div>
              </div>

            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="">X &#8599;</a>
              <a href="">Instagram &#8599;</a>
              <a href="">LinkedIn &#8599;</a>
              <a href="">Behance &#8599;</a>
              <a href="">Dribbble &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>info@nils.de</p>
              <p>+49 478 923 4534</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
