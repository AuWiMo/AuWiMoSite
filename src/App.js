import React, { useState, useEffect } from 'react';
import SongBlock from './components/SongBlock'; 
import Footer from './components/Footer'; 
import colors from './components/colors';

function App() {
  document.title = "Bardic Songbook";
  const [songBlocks, setSongBlocks] = useState([1]); 
  const [bard, setBard] = useState('potato');

  const addSongBlock = () => {
    setSongBlocks([...songBlocks, songBlocks.length + 1]);
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  useEffect(() => {
    // Code to run on page load
    let bardCookie = getCookie("bard");
    if (bardCookie) {
      console.log("Bard encountered:", bardCookie);
      setBard(bardCookie)
    } else {
      console.log("Let's create a bard!");
      bardCookie = {
        spell1: {
          name: "Spell Name",
          url: "Song URL"
        }
      };
      console.log("New bard", bardCookie);
      setBard(bardCookie)
    }
    setTimeout(() => {
      console.log("Lets check them out!\n", bard)
    }, 500)
    
  }, []);



  return (
    
    <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: colors.yellow, textShadow: `2px 2px 4px black`, }}>Bardic Songbook</h1>
      {songBlocks.map((blockId) => (
        <SongBlock key={blockId} blockId={blockId} bard={bard} setBard={setBard}/>
      ))}
      <button onClick={addSongBlock}  style={{ width: "max-content", margin: '10px', marginBlockEnd: '100px' }} className="songbuttons" >New Song</button>
      <Footer/>
    </div>
    
  );
}

export default App;