import React, { useState, useEffect  } from 'react';


const Divider = ({ randomFactor }) => {  
  const [background, setBackground] = useState('linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(50,205,50,1) 25%, rgba(132,244,112,1) 30%, rgba(50,205,50,1) 35%, rgba(2,0,36,0) 50%, rgba(50,205,50,1) 75%, rgba(132,244,112,1) 85%, rgba(50,205,50,1) 95%)'); // Initial color
  const [time] = useState(Date.now())
  
  useEffect(() => {
    // Function to generate a random color
    const pushColor = () => {
      let time_elapsed =  ((randomFactor + (5 *(Date.now() - time)/1000)) % 100) + 0.5*(Math.random()-0.5);
      let new_gradient = `linear-gradient(90deg, rgba(2,0,36,0) ${-100 + time_elapsed}%, rgba(50,205,50,1) ${-80 + time_elapsed}%, rgba(132,244,112,1) ${-70 + time_elapsed}%, rgba(50,205,50,1) ${-60 + time_elapsed}%, rgba(2,0,36,0) ${-50 + time_elapsed}%, rgba(50,205,50,1) ${-30 + time_elapsed}%, rgba(132,244,112,1) ${-20 + time_elapsed}%, rgba(50,205,50,1) ${-10 + time_elapsed}%, rgba(2,0,36,0) ${0 + time_elapsed}%, rgba(50,205,50,1) ${20 + time_elapsed}%, rgba(132,244,112,1) ${30 + time_elapsed}%, rgba(50,205,50,1) ${40 + time_elapsed}%, rgba(2,0,36,0) ${50 + time_elapsed}%, rgba(2,0,36,0) ${60 + time_elapsed}%, rgba(50,205,50,1) ${70 + time_elapsed}%, rgba(132,244,112,1) ${80 + time_elapsed}%, rgba(50,205,50,1) ${90 + time_elapsed}%, rgba(2,0,36,0) ${100 + time_elapsed}%)`;
      console.log(time_elapsed)
      return new_gradient
    };

    // Interval to update the background color every 0.5 seconds
    const intervalId = setInterval(() => {
      const newColor = pushColor();
      setBackground(newColor);
    }, 100);

    // Clean-up function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className='matrix_font intro_text' style={{display: 'flex', flexDirection: "row", margin: '3vh', width: '100%', justifyContent: 'flex-start', overflow: 'hidden', position: 'relative'}}> 
      <div style={{whiteSpace: 'nowrap', background}} className='gradient_text' >
        011000010111010101110111011010010110110101101111011000010111010101110111011010010110110101101111011000010111010101110111011010010110110101101111011000010111010101110111011010010110110101101111011000010111010101110111011010010110110101101111
      </div>
    </div>
  );
};

export default Divider;