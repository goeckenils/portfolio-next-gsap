'use client';
import React from 'react';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import WorkCard from '@/components/WorkCard/WorkCard';
import AnimateFrom from '@/components/AnimateFrom/AnimateFrom';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { workData as data } from './data';

import './work.css';
import DelayedLink from '@/components/DelayedLink/DelayedLink';

interface WorkSectionProps {
  // Add your props here
}

const WorkSection: React.FC<WorkSectionProps> = ({}) => {
  const container = React.useRef<HTMLDivElement>(null);
  const timeline = React.useRef<gsap.core.Timeline>(null);

  return (
    <div className="work-container" ref={container}>
      <div className="heading">
        <AnimatedText text="WORK" />
      </div>

      <div className="cards">
        <AnimateFrom duration={1} delay={1}>
          {data.map((item, index) => (
            <DelayedLink key={index} href={`/`} delay={1000}>
              <WorkCard
                key={index}
                title={item.title}
                description={item.description}
                tags={item.tags || []}
                image={item.image}
              />
            </DelayedLink>
          ))}
        </AnimateFrom>
      </div>
    </div>
  );
};

export default WorkSection;
