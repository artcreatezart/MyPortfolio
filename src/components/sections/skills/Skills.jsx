import React from 'react'
import '../skills/skills.scss'
import { FaHtml5, FaSass, FaJs, FaReact, FaGithub, FaFigma } from 'react-icons/fa';
import { SiAdobeindesign, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { MdOutlineCreate, MdOutlineSyncProblem } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { FaTeamspeak } from "react-icons/fa6";


const hardSkills = [
    {
      id: 1,
      name: 'HTML',
      image: <FaHtml5 />,
    },
    {
      id: 2,
      name: 'SCSS',
      image: <FaSass /> ,
    },
    {
      id: 3,
      name: 'JavaScript',
      image: <FaJs />,
    },
    {
      id: 4,
      name: 'React',
      image: <FaReact />,
    },
    {
      id: 5,
      name: 'Figma',
      image: <FaFigma/>,
    },
    {
      id: 6,
      name: 'Photoshop',
      image: <SiAdobephotoshop />,
    },
    {
      id: 7,
      name: 'Illustrator',
      image: <SiAdobeillustrator />,
    },
    {
      id: 8,
      name: 'InDesign',
      image: <SiAdobeindesign />,
    },
    {
      id: 9,
      name: 'GitHub',
      image: <FaGithub/>,
    },
  ]
  
const softSkills = [
    {
      id: 1,
      name: 'Analysis',
      image: <GrAnalytics />,
    },
    {
      id: 2,
      name: 'Team Work',
      image: <RiTeamLine/>,
    },
    {
      id: 3,
      name: 'Communication',
      image: <FaTeamspeak/>,
    },
    {
      id: 4,
      name: 'Problem Solving',
      image: <MdOutlineSyncProblem/>,
    },
    {
      id: 5,
      name: 'Creativity',
      image: <MdOutlineCreate/>,
    }
]  

const Skills = () => {
  return (
    <section id='skillSection'>
        <h1>Skills</h1>
        <h2>Hard Skills</h2>
        <div className='skills-container'>
            {hardSkills.map((hardSkill) => (
            <div key={hardSkill.id} className="skills-card">
              {typeof hardSkill.image === 'string' ? (
              <img src={hardSkill.image} alt={`${hardSkill.name} logo`} className='skills-card-img'/>
            ) : (
              <div className='skills-card-img'>{hardSkill.image}</div>
            )}
              <h2 className='skills-card-name'>{hardSkill.name}</h2>
              
            </div>
          ))}
        </div>
        <div className='horizantal-line'/>
        <h2>Top Soft Skills</h2>
        <div className='skills-container'>
        {softSkills.map((softSkill) => (
            <div key={softSkill.id} className="skills-card">
              {typeof softSkill.image === 'string' ? (
              <img src={softSkill.image} alt={`${softSkill.name} logo`} className='skills-card-img'/>
            ) : (
              <div className='skills-card-img'>{softSkill.image}</div>
            )}
              <h2 className='skills-card-name'>{softSkill.name}</h2>
              
            </div>
          ))}
          <div className='skill-character-img'/>
        </div>
        
        
      </section>
  )
}

export default Skills
