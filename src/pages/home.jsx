import React, { useState, useEffect  } from 'react';
import '../components/home/home.css';
import Header from '../components/home/Header'; 
import Divider from '../components/home/Divider';

function Home() {
  const [background, setBackground] = useState('linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(50,205,50,1) 25%, rgba(132,244,112,1) 30%, rgba(50,205,50,1) 35%, rgba(2,0,36,0) 50%, rgba(50,205,50,1) 75%, rgba(132,244,112,1) 85%, rgba(50,205,50,1) 95%)'); // Initial color
  const [time] = useState(Date.now())
  
  useEffect(() => {
    // Function to generate a random color
    const pushColor = () => {
      let time_elapsed =  ((8 *(Date.now() - time)/1000) % 50);
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
  }, []); // Empty dependency array ensures the effect runs only once on component mount




  return (
    <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <div id='homeBg' style={{ // background
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw', 
        height: '100vh', 
        background: 'hsla(26, 19%, 40%, 1)',
        background: 'radial-gradient(ellipse at 50% 0%, rgb(2 45 19 / 1) 0%, rgb(0 0 0 / 1) 89.49%)',
        zIndex: -1
        }}>
      </div> 

      <Header/>

      <Divider/>

      {/* //about me */}
      <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', width: '100%'}}>

        
        <div style={{ display:'flex', flexDirection:"row", alignItems: 'center', justifyContent: 'center', marginBlock: '1vh', marginInline: '2vw', width: 'calc(100% - 4vw)',  gap: '5vw'}}>

          <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', border: 'none', }}>
            <div className='matrix_font matrix_reference'>Wake up... The Matrix has you... Follow the White Rabbit down the ho le and you will find...</div>
            <div id="nameplate" style={{ color: "lime", textShadow: `0px 0px 1px black`,
            }} className='matrix_font'>AUSTIN MORRIS</div>
            <div style={{ textAlign: 'center'}} className='matrix_font intro_text'>I am a software engineer with experience in game development, cloud systems<br></br>web development, and automation studying at the Georgia Institute of Technology. </div>
            <div style={{ textAlign: 'center'}} className='matrix_font intro_text'>I like to dive into creative indeavors, particularly investigatiing high-tech and cutting<br></br>edge technologies. Why would I wrestle with devices of old when I could <br></br>be creating the toys and tools of tomorrow?</div>

          </div>

          <div style={{ display:'flex', justifyContent: 'inlineStart', border: 'none',  }}>
            <img style={{border: '2px solid green',  borderRadius: '10px' }} src="https://media.discordapp.net/attachments/603756071139540992/1207908992966197268/IMG_0709.jpg?ex=65e15be9&is=65cee6e9&hm=c9c9bce2db17e1f141c0a04de56c3f76a536ef88e89f0affbeeadb3726c565a5&=&format=webp"/>
          </div>
        </div>



        <Divider/>


        

     

      </div>

      


    </div>
    
  );
}

export default Home;

