import React from 'react';
import './FlipCard.css';


const FlipCard = ({ name, role, description, image }) => {
  
  return (
    <div className='card_margins'>
      <div className="flip-container" onTouchStart={() => {this.classList.toggle('hover');}}>
      <div className="flipper">
        <div className="front matrix_font">
          <div className="project_name">{name}</div>
          <img src={image} className='project_image'/>
          <div>{role}</div>

          
        </div>
        <div className="back matrix_font">
          <div>
            <div className="project_name">{name}</div>
            <div>{role}</div>
          </div>
          <div className='project_description'>{description}</div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default FlipCard;