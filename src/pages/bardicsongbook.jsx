import React, { useState, useEffect  } from 'react';
import '../components/bardicsongbook/bardicsongbook.css'
import SongBlock from '../components/bardicsongbook/SongBlock'; 
import Footer from '../components/bardicsongbook/Footer'; 
import colors from '../components/bardicsongbook/colors';
// import logo from './components/logo.png';

function BardicSongbook() {
  document.title = "Bardic Songbook";
  const [songBlocks, setSongBlocks] = useState([]);

  const addSongBlock = () => {
    console.log("\naddSongBlock called");
    setSongBlocks((prevSongBlocks) => [...prevSongBlocks, prevSongBlocks.length + 1]);
  };

  useEffect(() => {
    // Code to run on page load
    let bardStored = JSON.parse(localStorage.getItem("bard"));
    if (bardStored) {
      console.log("Bard encountered:", bardStored);
      localStorage.setItem('bard', JSON.stringify(bardStored))

      let numSpells = bardStored.length
      console.log("Number of spells: ", numSpells)

      let i = 0;
      while (i < numSpells - 1) {
        addSongBlock()
        i++
      }

    } else {
      console.log("Let's create a bard!");
      addSongBlock()

    }
    
    
  }, []);

  return (
    <div>
      <div id='bardicBg' style={{ 
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw', 
      height: '100vh', 
      background: 'hsla(26, 19%, 40%, 1)',
      background: 'linear-gradient(140deg, hsla(26, 19%, 40%, 1) 0%, hsla(30, 16%, 76%, 1) 100%)',
      zIndex: -1
      }}>
      </div> 

      <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display:'flex', flexDirection:"row", alignItems: 'center', justifyContent: 'center' }}>
        {/* <img
          src={logo}
          alt="Logo"
          style={{ width: '64px', height: '64px' }}
        /> */}
        <h1 style={{ color: colors.yellow, textShadow: `0px 0px 1px black`, 
          // marginInlineEnd: "64px" 
          textDecoration: 'underline'
        }}>Bardic Songbook</h1>

      </div>
      {songBlocks.map((blockId) => (
        <SongBlock key={blockId} blockId={blockId} />
      ))}
      <button onClick={addSongBlock}  style={{ width: "max-content", margin: '10px', marginBlockEnd: '100px' }} className="songbuttons" >New Song</button>
      <Footer/>
      </div>
    </div>

    
    
  );
}

export default BardicSongbook;