import React from 'react';
import '../components/home/home.css';
import Header from '../components/home/Header'; 
import Divider from '../components/home/MatrixDivider';
import FlipCard from '../components/FlipCard/FlipCard';
import GTLogo from '../components/home/GTVertical.png';
import SolvImage from '../components/home/project_images/solv_circle_transparent.png';
import FASImage from '../components/home/project_images/FAS.png';
import HelloFreshImage from '../components/home/project_images/hellofresh.png';
import DDMImage from '../components/home/project_images/ddm.png';
import BardicImage from '../components/bardicsongbook/logo.png';

function Home() {

  return (
    <div id="aboutMe" style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', width: '100%'}}>
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

      <Divider randomFactor={0}/>
    

      <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', width: '100%'}}>

        
        <div style={{ display:'flex', flexDirection:"row", alignItems: 'center', justifyContent: 'center', marginBlock: '1vh', marginInline: '2vw', width: 'calc(100% - 4vw)',  gap: '5vw'}}>

          <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center', border: 'none', }}>
            <div className='matrix_font matrix_reference'>Wake up... The Matrix has you... Follow the White Rabbit down the ho le and you will find...</div>
            <div id="nameplate" style={{ color: "lime", textShadow: `0px 0px 1px black`,
            }} className='matrix_font'>AUSTIN MORRIS</div>
            <div style={{ textAlign: 'center'}} className='matrix_font intro_text'>I am a software engineer with experience in game development, cloud systems<br></br>web development, and automation studying at the Georgia Institute of Technology. </div>
            <div style={{ textAlign: 'center'}} className='matrix_font intro_text'>I like to dive into creative indeavors, particularly investigatiing high-tech and cutting<br></br>edge technologies. Why would I wrestle with devices of old when I could <br></br>be creating the toys and tools of tomorrow?</div>

          </div>

          <div style={{ display:'flex', justifyContent: 'inlineStart', border: 'none', userSelect: 'none', draggable: "false" }}>
            <img style={{border: '2px solid green',  borderRadius: '10px', userSelect: 'none'}} draggable={false} alt="Me looking Matrix-y" src="https://media.discordapp.net/attachments/603756071139540992/1207908992966197268/IMG_0709.jpg?ex=65e15be9&is=65cee6e9&hm=c9c9bce2db17e1f141c0a04de56c3f76a536ef88e89f0affbeeadb3726c565a5&=&format=webp"/>
          </div>
        </div>

        <div id="educationBox">
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px', marginInline: '40px', alignItems: 'center'}}>
            <div className='category_header matrix_font' style={{margin: '0px'}}>Education</div>
            <div className='matrix_font'>Bachelor of Science - Computer Science</div>
            <div className='matrix_font'>Thread specializations in A.I. and Computational Media</div>
            <div className='matrix_font'>Anticipated Graduation: December 2024</div>
          </div>
          <a href="https://www.cc.gatech.edu/facts-and-rankings">
            <img id="gt_logo" src={GTLogo} alt='Georgia Institute of Technology Logo' />
          </a>
        </div>



        <Divider randomFactor={15} id="experience" />
        <div className='matrix_font section_header'>EXPERIENCE</div>
        <div className='experience_row_labeled'>
          <div className='matrix_font category_header sideways_text'>PROESSIONAL</div>
          <div className='experience_row'>
            <FlipCard
              name='SolvAI Technologies LLC'
              role='Backend and Cloud Developer'
              description={
                <div className='project_description'>
                  <div>
                    <div className='bullet'>- Integrated and Managed Azure Cosmos Database</div>
                    <div className='bullet'>- Set up CI/CD Workflow with Git Actions</div>
                    <div className='bullet'>- Secured confidential user data with Azure Keyvault</div>
                  </div>
                  <a href="solvapp.net" className='matrix_font' style={{textDecoration: 'underline', marginBlock: '20px'}}>Website: https://solvapp.net</a>
                
                </div>
                
              }
              image={SolvImage}


            />
            <FlipCard
              name='Factory Automation Systems'
              role={<div>Software Engineering and <br />Manufacturing Automation Co-Op</div>}
              description='Description'
              image={FASImage}

            />
            <FlipCard
              name='Hello Fresh'
              role='Production Associate'
              description='Description'
              image={HelloFreshImage}
            />
          </div>
          

        </div>
        <div className='experience_row_labeled'>
          <div className='matrix_font category_header sideways_text'>PERSONAL</div>
          <div className='experience_row'>
            <FlipCard
              name='Doodle Dice Monsters'
              role='Online Multiplayer Game'
              description='Description'
              image={DDMImage}
            />
             <FlipCard
              name='Bardic Songbook'
              role='Tool For D&D Players'
              description='Description'
              image={BardicImage}
            />
          </div>

        </div>

        
        <Divider randomFactor={0} id="skills"/>
        <div className='matrix_font section_header'>SKILLS</div>

        <Divider randomFactor={15} id="resume"/>
        <div className='matrix_font section_header'>RESUME</div>

        <Divider randomFactor={0} id="contact"/>
        <div className='matrix_font section_header'>CONTACT</div>

        <Divider randomFactor={15} id="contact"/>
      </div>

      


    </div>
    
  );
}

export default Home;

