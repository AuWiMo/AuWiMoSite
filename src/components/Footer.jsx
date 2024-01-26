import React from 'react';

const Footer = () => {
  const openDDM = () => {
    window.open('https://store.steampowered.com/app/2454170/Doodle_Dice_Monsters/', '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#FFE32C',
      backgroundImage: "linear-gradient(90deg, #917c13 0%, #FFE200 10%, #FFE200 20%,  #917c13 50%, #FFE200 80%, #FFE200 90%, #917c13 110%)",
      padding: '10px',
      
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div onClick={openDDM} style={{ color: 'black', textDecoration: 'none', marginInlineStart: '2vw' }}>
        &copy; 2024 Mighty Jungle Games LLC / Austin "AuWiMo" Morris
      </div>
      <a onClick={openDDM} href="/privacy-policy" style={{ color: 'black', textDecoration: 'none', marginInlineEnd: '2vw' }}>
          {'> > > > >  Check Out Doodle Dice Monsters!  < < < < <'}
      </a>
      
    </div>
  );
};

export default Footer;