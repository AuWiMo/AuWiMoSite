import React from 'react';
import '../components/home/home.css';
import Header from '../components/home/Header'; 
import Divider from '../components/home/MatrixDivider';
import FlipCard from '../components/FlipCard/FlipCard';
import Skill from '../components/home/Skill';



import GTLogo from '../components/home/GTVertical.png';
import SolvImage from '../components/home/project_images/solv_circle_transparent.png';
import FASImage from '../components/home/project_images/FAS.png';
import HelloFreshImage from '../components/home/project_images/hellofresh.png';
import DDMImage from '../components/home/project_images/ddm.png';
import BardicImage from '../components/bardicsongbook/logo.png';

import JsImage from '../components/home/skills_images/javascript.png';
import HtmlImage from '../components/home/skills_images/html.png';
import CssImage from '../components/home/skills_images/css.png';
import PythonImage from '../components/home/skills_images/python.png';
import JavaImage from '../components/home/skills_images/java.png';
import CsharpImage from '../components/home/skills_images/Csharp.png';
import SqlImage from '../components/home/skills_images/sql.png';

import ReactImage from '../components/home/skills_images/React.png';
import NodeImage from '../components/home/skills_images/node.png';
import GitImage from '../components/home/skills_images/git.png';
import AzureImage from '../components/home/skills_images/azure.svg';
import UnityImage from '../components/home/skills_images/unity.png';
import DockerImage from '../components/home/skills_images/docker.png';
import JiraImage from '../components/home/skills_images/jira.png';
import OfficeImage from '../components/home/skills_images/office.png';
import BlenderImage from '../components/home/skills_images/blender.svg';
import ElectronImage from '../components/home/skills_images/electron.svg';

import Resume from '../components/home/myresume.pdf';
//import FileImage from '../components/home/skills_images/file.svg';
import DownloadImage from '../components/home/skills_images/download.svg';

import GithubImage from '../components/home/skills_images/github.svg';
import LinkedinImage from '../components/home/skills_images/linkedin.svg';

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
            <div className='matrix_font matrix_reference'>Wake up... The Matrix has you... Follow the White Rabbit down the hole and you will find...</div>
            <div id="nameplate" style={{ color: "lime", textShadow: `0px 0px 1px black`,
            }} className='matrix_font'>AUSTIN MORRIS</div>
            <div style={{ textAlign: 'center'}} className='matrix_font intro_text'>I am a software engineer with experience in game development, cloud systems<br></br>web development, and automation studying at the Georgia Institute of Technology. </div>
            <div style={{ textAlign: 'center'}} className='matrix_font intro_text'>I like to dive into creative indeavors, particularly investigatiing high-tech and cutting<br></br>edge technologies. Why would I wrestle with devices of old when I could <br></br>be creating the toys and tools of tomorrow?</div>

          </div>

          <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'inlineStart', border: 'none', userSelect: 'none', draggable: "false" }}>
            <link rel="prefetch" href={"../components/home/matrix_headshot_clear.png"}></link>
            <div id="matrix_headshot_img"></div>
            <div className='matrix_font intro_text'>Hover over me!</div>

          </div>
        </div>

        <div id="educationBox">
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px', marginInline: '40px', alignItems: 'center'}}>
            <div className='category_header matrix_font' style={{margin: '0px'}}>Education</div>
            <div className='matrix_font'>Bachelor of Science - Computer Science</div>
            <div className='matrix_font'>Thread specializations in A.I. and Computational Media</div>
            <div className='matrix_font'>Anticipated Graduation: December 2024</div>
          </div>
         <a rel="noreferrer"href="https://www.cc.gatech.edu/facts-and-rankings" target="_blank">
            <img draggable='false' id="gt_logo" src={GTLogo} alt='Georgia Institute of Technology Logo' />
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
              dates='(Jan. 2024 - Present)'
              description={
                <div className='project_description'>
                  <div>
                    <div className='bullet'>- Set Up, Integrated, and Managed Azure Cosmos Database</div>
                    <div className='bullet'>- Set up CI/CD Workflow with Git Actions</div>
                    <div className='bullet'>- Secured confidential user data with Azure Keyvault</div>
                  </div>
                 <a href="https://solvapp.net" rel="noreferrer"  target="_blank" className='matrix_font' style={{textDecoration: 'underline', marginBlock: '20px'}}>Website: https://solvapp.net</a>
                
                </div>
                
              }
              image={SolvImage}


            />
            <FlipCard
              name='Factory Automation Systems'
              role={<div>Software Engineering and <br />Manufacturing Automation Co-Op</div>}
              dates='(Aug. 2022 - Dec. 2022)'
              description={
                <div className='project_description'>
                  <div>
                    <div className='bullet'>- Led HMI overhaul for multi-million dollar factory including rework, test simulation, and integration</div>
                    <div className='bullet'>- Managed PLCs and VFDs in large device network</div>
                    <div className='bullet'>- Parsed and manipulated sheets of 15,000+ tags using Excel </div>
                  </div>
                
                </div>
                
              }
              image={FASImage}

            />
            <FlipCard
              name='Hello Fresh'
              role='Production Associate'
              dates='(Jun. 2021 - Aug. 2021)'
              description={
                <div className='project_description'>
                  <div>
                    <div className='bullet'>- Efficiently and acccurately fulfilled customer orders</div>
                    <div className='bullet'>- Worked with a team to consistently meet production quotas</div>
                    <div className='bullet'>- Adapted to quickly transferring to new roles</div>
                  </div>
                
                </div>
                
              }
              image={HelloFreshImage}
            />
          </div>
          

        </div>
        <div className='experience_row_labeled'>
          <div className='matrix_font category_header sideways_text'>PERSONAL</div>
          <div className='experience_row'>
            <FlipCard
              name='Doodle Dice Monsters'
              short_desc='Online Multiplayer Game'
              role='Full Stack Game Developer'
              dates="(Complicated - Present)"
              description={
                <div className='project_description'>
                  <div>
                    <div className='bullet'>- Developed a game with pure JS (Node.JS), HTML, and CSS</div>
                    <div className='bullet'>- Designed systems for multiplayer gameplay and user creation of game images</div>
                    <div className='bullet'>- Integrated Azure CosmosDB with NoSQL API and Blob Storage to store user data</div>
                  </div>
                 <a rel="noreferrer" href="https://store.steampowered.com/app/2454170/Doodle_Dice_Monsters/"  target="_blank" className='matrix_font' style={{textDecoration: 'underline', marginBlock: '20px'}}>Website: LINK</a>
                
                </div>
                
              }
              image={DDMImage}
            />
             <FlipCard
              name='Bardic Songbook'
              role='Web Developer'
              short_desc='Tool For D&D Players'
              dates="(Jan. 2024)"
              description={
                <div className='project_description'>
                  <div>
                    <div className='bullet'>- Developed a tool for Dungeons and Dragons using React JS</div>
                    <div className='bullet'>- Obtained video audio based on YouTube url with timecode via YouTube API</div>
                    <div className='bullet'>- Stored non-sensitive data in localStorage and set up retrieval for persistent sessions</div>
                  </div>
                 <a rel="noreferrer" href="https://auwimo.com/bardicsongbook"  target="_blank" className='matrix_font' style={{textDecoration: 'underline', marginBlock: '20px'}}>Website: LINK</a>
                
                </div>
                
              }
              image={BardicImage}

            />
          </div>

        </div>

        
        <Divider randomFactor={0} id="skills"/>
        <div className='matrix_font section_header'>SKILLS</div>
        <div className='skills_row'>
            <Skill
              name="JavaScript"
              image={JsImage}
            />
            <Skill
              name="HTML"
              image={HtmlImage}
            />
            <Skill
              name="CSS"
              image={CssImage}
            />
            <Skill
              name="Python"
              image={PythonImage}
            />
            <Skill
              name="Java"
              image={JavaImage}
            />
            <Skill
              name="C#"
              image={CsharpImage}
            /> 
            <Skill
              name="SQL"
              image={SqlImage}
            /> 
        </div>
        <div className='skills_row'>
              <Skill
                name="React"
                image={ReactImage}
              />
              <Skill
                name="NodeJS"
                image={NodeImage}
              />
              <Skill
                name="Git/GitHub"
                image={GitImage}
              />
              <Skill
                name="Unity"
                image={UnityImage}
              />
              <Skill
                name="Azure"
                image={AzureImage}
              />
              <Skill
                name="Jira"
                image={JiraImage}
              />

              
              
        </div>
        <div className='skills_row'>
              <div style={{ paddingLeft: '80px' }}></div>
              <Skill
                name="Docker"
                image={DockerImage}
              /> 
              <Skill
                name="MS Office"
                image={OfficeImage}
              />
              <Skill
                name="Blender"
                image={BlenderImage}
              />
              <Skill
                name="Electron"
                image={ElectronImage}
              />
              <div className='matrix_font' style={{ paddingLeft: '20px' }}>
                
                <div>And More!</div>
              </div>
             
              
              
        </div>
      

        <Divider randomFactor={15} id="resume"/>
        <div className='matrix_font section_header'>RESUME</div>

       <a rel="noreferrer" href={Resume} download="AustinMorrisResume.pdf" className="contactBox" style={{ height: '50px', width: '300px' }}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px', alignItems: 'center', width: '250px'}}>
            <div className='category_header matrix_font' style={{margin: '0px'}}>DOWNLOAD</div>
            <div className='matrix_font filename'>Resume 2024-05-03.pdf</div>

          </div>
          <img draggable='false' className="download_logo" src={DownloadImage} alt='Download Icon' style={{fill: 'white'}}/>
        </a>

        <Divider randomFactor={0} id="contact"/>
        <div className='matrix_font section_header'>CONTACT+</div>
        <div className='skills_row'>
          <div className="contactBox">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px', alignItems: 'center', width: '150px'}}>
              <div className='category_header matrix_font' style={{margin: '0px'}}>Email</div>
             <a rel="noreferrer" href="mailto:auwimo@gmail.com" target="_blank"  className='matrix_font'>auwimo@gmail.com</a>
            </div>
          </div>
           <a rel="noreferrer" href="https://github.com/AuWiMo/"  target="_blank" className="contactBox">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px', alignItems: 'center', width: '300px'}}>
              <div className='category_header matrix_font' style={{margin: '0px'}}>GitHub</div>
              <div className='matrix_font intro_text'>Mostly private for commercial reasons, but you can still look at my commit widget and a few small projects, mostly made when I was learning to code.</div>
            </div>
            <img draggable='false' className="contact_logo" src={GithubImage} alt='GitHub Logo' />
          </a>
           <a rel="noreferrer" href="https://www.linkedin.com/in/auwimo/"  target="_blank" className="contactBox">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px', alignItems: 'center', width: '300px'}}>
              <div className='category_header matrix_font' style={{margin: '0px'}}>LinkedIn</div>
              <div className='matrix_font intro_text'>My site is much cooler and more useful, but here: </div>
            </div>
            <img draggable='false' className="contact_logo" src={LinkedinImage} alt='LinkedIn Logo' />
          </a>
        </div>
        
      </div>

        <Divider randomFactor={15} id="contact"/>
        <div className='matrix_font matrix_reference'>Flynn: That's AuWiMo. He fights for the Users!</div>
        

      


    </div>
    
  );
}

export default Home;

