import React from 'react';
import Image from 'next/image';
import authorPicture from '../../assets/images/authorPicture.png';
import AnimationText from '@/components/AnimatedText/AnimatedText';

import './introduction.css';

interface IntroductionProps {
  // Add your props here
}

const IntroductionSection: React.FC<IntroductionProps> = ({}) => {
  return (
    <div className="introduction-container">
      <div className="text-column">
        <div className="introduction-headline">
          <AnimationText text="INTRODUCTION" />
          <AnimationText delay={0.3} text="NILS GOECKE" />
        </div>
        <div className="bio-wrapper">
          <div className="text-wrapper">
            <p className="text">
              Born and raised New Yorker, I am currently living in Phoenix,
              Arizona. I love learning and I have studied sociology, public
              health, nutrition, communications design, and, most recently, user
              experience.
              <br />
              <br />I am a curious creative who likes to explore and learn about
              what could be as well as a down-to-earth critical thinker who
              likes to evaluate what works best for now and the applicable steps
              needed to move forward.
            </p>
          </div>
          <div className="text-wrapper">
            <p className="text">
              As an experienced visual designer with project management,
              marketing, and research experience, I am currently looking for
              opportunities to grow as a UX Designer.
              <br />
              <br />
              Throughout my career journey, I have always wanted to help improve
              people's lives and gaining the insight and skill set to do so.
              While I was working for non-profit organizations and public health
              agencies, I learned that I wanted to grow as a professional that
              can create tangible solutions, which led me to going back to
              school for communication design, and, most recently, user
              experience.
            </p>
          </div>
        </div>
      </div>
      <div className="image-column">
        <Image src={authorPicture} alt="Cover Image" className="bio-img" />
      </div>
    </div>
  );
};

export default IntroductionSection;
