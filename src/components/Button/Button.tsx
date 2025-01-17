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
          <span className='button-arrow'>→</span>
        </div>
      </button>
      </Link>
    </div>
  );
};

export default Button;