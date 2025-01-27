import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { time } from 'console';

interface AnimateFromProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  stagger?: number;
}

const AnimateFrom: React.FC<AnimateFromProps> = ({
  children,
  duration = 1,
  delay = 0,
  stagger = 0.2,
}) => {
  const wrapperRef = useRef<(HTMLDivElement | null)[]>([]);
  const timeline = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    if (wrapperRef.current.length) {
      timeline!.current = gsap.timeline({ paused: true }).fromTo(
        wrapperRef.current,
        { y: 75, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: 'power4.inOut',
        }
      );
    }

    timeline!.current!.play();
  }, [duration, delay, stagger]);

  const handleClick = () => {
    timeline!.current!.reverse();
  };

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <div
          onClick={handleClick}
          ref={(el) => {
            wrapperRef.current[index] = el;
          }} // Store refs in an array
          key={index}
          style={{ overflow: 'hidden' }} // Prevent content overflow during animation
        >
          {child}
        </div>
      ))}
    </>
  );
};

export default AnimateFrom;
