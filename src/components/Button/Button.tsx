'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Button.css';
import Link from 'next/link';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  text,
  href,
  margin = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0 ,
  ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      let span = buttonRef.current.querySelector("span");
      let tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, stagger: 0.1, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      buttonRef.current.addEventListener("mouseenter", () => tl.play(0));
    }
  }, []);

  return (
    <div className="button-container" style={{
      margin: margin,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight
      }}>
        <Link href={href || "/"}>
      <button {...props} ref={buttonRef} className="button">
        <div className="button-content">
          <span>{text}</span>
          <span className='button-arrow'>
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1401 7.3901L10.3901 14.1401C10.3198 14.2104 10.2244 14.2499 10.125 14.2499C10.0256 14.2499 9.93018 14.2104 9.85986 14.1401C9.78955 14.0698 9.75004 13.9744 9.75004 13.875C9.75004 13.7755 9.78955 13.6801 9.85986 13.6098L15.9697 7.49996H0.375C0.275544 7.49996 0.180161 7.46045 0.109835 7.39012C0.0395089 7.3198 0 7.22442 0 7.12496C0 7.0255 0.0395089 6.93012 0.109835 6.85979C0.180161 6.78947 0.275544 6.74996 0.375 6.74996H15.9697L9.85986 0.640097C9.78955 0.569778 9.75004 0.474405 9.75004 0.37496C9.75004 0.275514 9.78955 0.180142 9.85986 0.109823C9.93018 0.0395046 10.0256 2.56665e-09 10.125 0C10.2244 -2.56665e-09 10.3198 0.0395046 10.3901 0.109823L17.1401 6.85982C17.175 6.89463 17.2026 6.93597 17.2214 6.98146C17.2403 7.02695 17.25 7.07572 17.25 7.12496C17.25 7.1742 17.2403 7.22296 17.2214 7.26846C17.2026 7.31395 17.175 7.35528 17.1401 7.3901Z" fill="white"/>
</svg>

          </span>
        </div>
      </button>
      </Link>
    </div>
  );
};

export default Button;