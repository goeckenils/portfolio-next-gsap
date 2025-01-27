import React from 'react';

import './WorkCard.css';

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  tags,
  image,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="project" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="tags">
          {tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
