'use client'
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import SplitType from 'split-type'

import './AnimatedText.css';
import { useGSAP } from '@gsap/react';
import { useAnimation } from '@/context/TimelineContext/TimelineContext';

type AnimatedTextProps = {
  text: string;
  timeline?: gsap.core.Timeline;
  delay?: number;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text,
  delay, 
  timeline: externalTimeline,
   ...props 
  }) => {
  const container = useRef<HTMLDivElement>(null);
  const item = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>(null);
  const { menuAnimationComplete } = useAnimation();

  useGSAP(() => {
      const splittedText = new SplitType(item.current!, { types: ['lines', 'words'] });
      const lines = splittedText.lines;
      const words = splittedText.words;
  
        timeline!.current = gsap.timeline()
        .set(words, { y: 300 })
        .to(words, {
          duration: 2,
          y: 0,
          stagger: 0.2,
          ease: 'power4.out',
          delay: delay || 0,
        });

      if (externalTimeline) {
          externalTimeline.add(timeline!.current);
      }

      if (menuAnimationComplete) {
        timeline!.current.play();
      }


  }, []);

  useGSAP(() => {
    timeline!.current?.play();
  }, { scope: container });

  return (
    <div className='animated-text-container' ref={container}>
      <div className='animated-text-wrapper'>
        <h1 {...props} className="animated-text-item" ref={item}>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
