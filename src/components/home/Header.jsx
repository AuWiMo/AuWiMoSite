import React from 'react';


const Header = () => {
  
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    }}>
      <div style={{
        marginBlock: '3vh',
        left: '50%',
        width: '50%',
        background: '#012910',
        // backgroundImage: "linear-gradient(90deg, #917c13 0%, #FFE200 10%, #FFE200 20%,  #917c13 50%, #FFE200 80%, #FFE200 90%, #917c13 110%)",
        padding: '10px',
        // transform: 'translate(-50%, 0vw)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '20px',
        border: '2px solid lime',
        borderRadius: '10px',

        color: 'lime'
      }} className='matrix_font'>  
        <div>About Me</div>
        <div>|</div>
        <div>Experience</div>
        <div>|</div>
        <div>Skills</div>
        <div>|</div>
        <div>Resume</div>
        <div>|</div>
        <div>Contact</div>
      </div>
    </div>
    
  );
};

export default Header;