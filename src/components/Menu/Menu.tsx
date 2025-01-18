'use client';

import React, { useState, useRef, useEffect, use } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import './Menu.css';
import { useAnimation } from '@/context/TimelineContext/TimelineContext';

interface MenuProps {
  // Add your props here
}

const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'Introduction', path: '/introduction' },
  { name: 'Work', path: '/work' },
  { name: 'Lab', path: '/lab' },
  { name: 'Contact', path: '/contact' },
  { name: 'Playlists', path: '/playlists' },
];

const Menu: React.FC<MenuProps> = ({}) => {
  const container = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeline = useRef<gsap.core.Timeline>(null);
  const { handleMenuAnimationComplete } = useAnimation();
  const overlay = useRef<HTMLDivElement>(null);
  const itemHolder = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useGSAP(
    () => {
      gsap.set('.menu-link-item-holder', { y: 75 });
      timeline!.current = gsap
        .timeline({ paused: true, onComplete: handleMenuAnimationComplete })
        .to('.menu-overlay', {
          duration: 1.25,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          ease: 'power4.inOut',
        })
        .to('.menu-link-item-holder', {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    menuOpen ? timeline!.current!.play() : timeline!.current!.reverse();
  }, [menuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">
            <svg
              width="48"
              height="46"
              viewBox="0 0 48 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.1369 23.5714L28.3222 29.4755C27.8903 29.9141 27.1898 29.9141 26.7579 29.4755L26.7556 29.4732C26.3237 29.0346 26.3237 28.3234 26.7556 27.8848L30.7902 23.7882C31.2221 23.3497 31.2221 22.6384 30.7902 22.1999L24.0219 15.3274L24.023 15.3263L22.4587 13.7379L22.4633 13.7332V1.12529C22.4633 0.124702 21.272 -0.376294 20.5752 0.331228L0.326154 20.8938C-0.37065 21.6013 0.122987 22.811 1.10842 22.811H13.0651C13.3586 22.811 13.6398 22.6927 13.8471 22.4822L19.724 16.5149C20.1559 16.0763 20.8564 16.0763 21.2883 16.5149C21.7202 16.9534 21.7202 17.6647 21.2883 18.1032L17.2526 22.201C16.8207 22.6396 16.8207 23.3508 17.2526 23.7894L25.5875 32.2525L25.5864 32.2537L25.5873 44.8747C25.5873 45.8753 26.7787 46.3763 27.4755 45.6688L47.6738 25.1598C48.3706 24.4522 47.8772 23.2425 46.8918 23.2425H34.9192C34.6257 23.2425 34.3445 23.3609 34.1371 23.5714H34.1369Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">Nils Goecke</div>
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
                  <Link className="menu-link" href={link.path}>
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
