// SongBlock.js
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import colors from './colors';

const SongBlock = ({ blockId }) => {
  console.log("top of songblock")
  if (!localStorage.getItem('bard')) {
    console.log("creating the bard array")
    let spell1 = {
      name: "",
      url: "",
      old: false
    }
    let bard = [spell1]
    localStorage.setItem('bard', JSON.stringify(bard))
    console.log("Created a new bard with 1 spell", bard)
  }
  if (!(JSON.parse(localStorage.getItem('bard'))[blockId])) {
    console.log("No spell exists with id ", (blockId))
    let newBard = JSON.parse(localStorage.getItem('bard'))
    let newSpell = {
      name: "",
      url: "",
      old: false
    }
    newBard[blockId] = newSpell
    localStorage.setItem('bard', JSON.stringify(newBard))
    console.log("Saving bard", newBard)
  }

  let bard = JSON.parse(localStorage.getItem('bard'))
  console.log(bard, "looking at", blockId)
  const [spellName, setSpellName] = useState(bard[blockId].name);
  const [songName, setSongName] = useState(bard[blockId].url);
  const [videoId, setVideoId] = useState('');
  const [startTime, setStartTime] = useState(0);  

  // useEffect(() => {
  //   if (bard[blockId].old) { handleSaveButton() }
  // })
  
  const handleSpellChange = (e) => {
    setSpellName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setSongName(e.target.value);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditMode, setEditMode] = useState(true);

  const handlePlayButton = () => {
    console.log("handlePlayButton()")
    const videoIdMatch = /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/.exec(songName);

    if (videoIdMatch && videoIdMatch[1]) {
      setVideoId(videoIdMatch[1]);

      const timecodeMatch = /(?:t=)(\d+)/.exec(songName);
      if (timecodeMatch && timecodeMatch[1]) {
        setStartTime(parseInt(timecodeMatch[1], 10));
      } else {
        setStartTime(0);
      }

      // Update state to indicate playing
      setIsPlaying(true);
    } else {
      console.error('Invalid YouTube URL');
    }
  };

  const handleStopButton = () => {
    console.log("handleStopButton()")

    setVideoId('');
    setStartTime(0);

    // Update state to indicate not playing
    setIsPlaying(false);
  };

  useEffect(() => {
    // Use useEffect to update the button display based on the isPlaying state
    const playButton = document.getElementById(`playButton_${blockId}`);
    const stopButton = document.getElementById(`stopButton_${blockId}`);

    if (isPlaying) {
      playButton.style.display = 'none';
      stopButton.style.display = 'flex';
    } else if (!isEditMode) {
  
      playButton.style.display = 'flex';
      stopButton.style.display = 'none';
    }
  }, [isPlaying, blockId, isEditMode]);

  const handleEditButton = () => {
    // You can perform actions with the songName here
    document.getElementById(`spellName_${blockId}`).disabled = false;
    document.getElementById(`songInput_${blockId}`).style.display = 'flex';
    document.getElementById(`editButton_${blockId}`).style.display = 'none';
    document.getElementById(`saveButton_${blockId}`).style.display = 'block';
    document.getElementById(`playButton_${blockId}`).style.display = 'none';
    document.getElementById(`deleteButton_${blockId}`).style.display = 'block';
    setEditMode(true)
  };

  const handleDeleteButton = () => {
    // You can perform actions with the songName here
    let newBard = JSON.parse(localStorage.getItem('bard'))
    newBard.splice(blockId, 1)
    localStorage.setItem('bard', JSON.stringify(newBard))
    window.location.reload();
  };
  
  const handleSaveButton = () => {
    console.log(`Selected Song: ${songName}`);

    document.getElementById(`spellName_${blockId}`).disabled = true;
    document.getElementById(`songInput_${blockId}`).style.display = 'none';
    document.getElementById(`playButton_${blockId}`).style.display = 'block';
    document.getElementById(`editButton_${blockId}`).style.display = 'block';
    document.getElementById(`saveButton_${blockId}`).style.display = 'none';
    document.getElementById(`deleteButton_${blockId}`).style.display = 'none';
    
    let newBard = JSON.parse(localStorage.getItem('bard'))
    console.log("newbard is", newBard)
    let newSpell = {
      name: spellName,
      url: songName,
      old: true
    }
    newBard[blockId] = newSpell
    localStorage.setItem('bard', JSON.stringify(newBard))
    console.log("Saving bard", newBard)
    setEditMode(false)
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  // apparently pointer based, changing start time successfully sets it
  opts.playerVars.start = startTime;
  
  
  

  return (
    <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        border: `2px solid ${colors.yellow}`,
        borderRadius: '5px',
        width: 'min-content',
        margin: "5px",
        background: "tan",
        
      }}>
      <input
        type="text"
        id={`spellName_${blockId}`}
        onChange={handleSpellChange}
        className="songbuttons"
        placeholder="Spell Name"
        autoComplete="off"
        // onClick={handlePlayButton}
        value={spellName}
      />
      <input 
        type="text"
        id={`songInput_${blockId}`}
        onChange={handleUrlChange}
        className="songbuttons"
        style={{display: "block"}}
        placeholder="Enter Youtube URL"
        autoComplete="off"
        value={songName}
        
      />
      <button id={`playButton_${blockId}`} onClick={handlePlayButton} className="songbuttons" style={{ display:"none"}}>Start Casting</button>

      <button id={`stopButton_${blockId}`} onClick={handleStopButton} className="songbuttons" style={{ 
        display: "none", 
        color: "white",
        border: "2px solid white",
        borderRadius: "5px",
        backgroundColor: "#52ACFF",   
        backgroundImage: "linear-gradient(40deg, #0b4983 10%, #1560a7 25%, #1b73c4 45%, #52ACFF 90%, #62daff 110%)"
      }}> Stop Casting </button>
      
      <button id={`editButton_${blockId}`} onClick={handleEditButton} className="songbuttons" style={{ display:"none"}}>Edit</button>
      <button id={`deleteButton_${blockId}`} onClick={handleDeleteButton} className="songbuttons" style={{ display:"block"}}>Delete</button>
      <button id={`saveButton_${blockId}`} onClick={handleSaveButton} className="songbuttons"  style={{ display: "block"}}>Save Spell</button>
      {videoId && <YouTube videoId={videoId} opts={opts} style={{ display:"none"}} />}
    </div>
  );
};

export default SongBlock;
