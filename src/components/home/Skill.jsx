import React from 'react';


const Skill = ({ name, image, prof }) => {
  
  return (
    
        <div className="skill matrix_font">
          <img src={image} alt='logo for this business' className='skill_image'/>
          <div className="project_name">{name}</div>

          <div >{prof}</div>
        </div>
        
    
  );
};

export default Skill;