import React from 'react';
import '../components/home/home.css';
import Header from '../components/home/Header'; 
import Divider from '../components/home/Divider';

function Home() {

  return (
    <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <div id='homeBg' style={{ // background
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw', 
        height: '100vh', 
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
            <img style={{border: '2px solid green',  borderRadius: '10px' }} alt="Me looking Matrix-y" src="https://media.discordapp.net/attachments/603756071139540992/1207908992966197268/IMG_0709.jpg?ex=65e15be9&is=65cee6e9&hm=c9c9bce2db17e1f141c0a04de56c3f76a536ef88e89f0affbeeadb3726c565a5&=&format=webp"/>
          </div>
        </div>



        <Divider/>


        

     

      </div>

      


    </div>
    
  );
}

export default Home;

