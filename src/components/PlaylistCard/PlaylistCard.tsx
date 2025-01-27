import React from 'react';
// import Image from 'next/image';

interface PlaylistCardProps {
  img: string;
  href: string;
  curator: string;
  name: string;
  description: string;
  artists: string[];
  mood: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  img,
  // href,
  curator,
  name,
  description,
  artists,
  // mood,
}) => {
  return (
    <div className="playlist-card-container">
      <div className="playlist-img-container">
        <img src={img} />
      </div>
      <div className="playlist-text-container">
        <div className="playlist-text-wrapper">
          <p className="playlist-name">{name}</p>
          <p className="playlist-curator">{curator}</p>
          <p className="playlist-description">{description}</p>
          <p className="playlist-artists">
            {artists.map((artist, index) => {
              return <span key={index}>{artist}</span>;
            })}
          </p>
        </div>
        <div className="playlist-play-button">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.0014V11.3614C0 12.1514 0.87 12.6314 1.54 12.2014L9.68 7.0214C10.3 6.6314 10.3 5.7314 9.68 5.3314L1.54 0.161405C0.87 -0.268596 0 0.211405 0 1.0014Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
