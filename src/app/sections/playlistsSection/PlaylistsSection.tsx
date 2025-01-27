'use client';

import React, { useRef } from 'react';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import AnimateFrom from '@/components/AnimateFrom/AnimateFrom';
import DelayedLink from '@/components/DelayedLink/DelayedLink';
import PlaylistCard from '@/components/PlaylistCard/PlaylistCard';

import { data } from './data';
import './PlaylistsSection.css';

interface PlaylistsSection {
  // Add your props here
}

const PlaylistsSection: React.FC<PlaylistsSection> = ({}) => {
  const container = useRef<HTMLDivElement>(null);
  return (
    <div className="playlists-container" ref={container}>
      <div className="heading">
        <AnimatedText text="PLAYLISTS" />
      </div>
      <div className="flex-row">
        <div className="sub-heading">
          Born and raised New Yorker, I am currently living in Phoenix, Arizona.
          I love learning and I have studied sociology, public health,
          nutrition, communications design, and, most recently, user experience.
        </div>
        <div className="playlists-cards">
          <AnimateFrom duration={1} delay={1}>
            {data.map((playlist, index) => (
              <PlaylistCard
                key={index}
                img={playlist.img}
                href={playlist.href}
                curator={playlist.curator}
                name={playlist.name}
                description={playlist.description}
                artists={playlist.artists}
                mood={playlist.mood}
              />
            ))}
          </AnimateFrom>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsSection;
