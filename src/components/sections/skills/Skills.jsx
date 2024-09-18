import React from 'react'
import '../skills/skills.scss'

const hardSkills = [
    {
      id: 1,
      name: 'Analysis',
      image: '/img/skillsArrayImg/analysis.png',
    },
    {
      id: 2,
      name: 'Team Work',
      image: '/img/skillsArrayImg/teamwork-skill.png',
    },
    {
      id: 3,
      name: 'Communication',
      image: '/img/skillsArrayImg/communication.png',
    },
    {
      id: 4,
      name: 'Problem Solving',
      image: '/img/skillsArrayImg/problem-skil.png',
    }
  ]
  
const softSkills = [
    {
      id: 1,
      name: 'Analysis',
      image: '/img/skillsArrayImg/analysis.png',
    },
    {
      id: 2,
      name: 'Team Work',
      image: '/img/skillsArrayImg/teamwork-skill.png',
    },
    {
      id: 3,
      name: 'Communication',
      image: '/img/skillsArrayImg/communication.png',
    },
    {
      id: 4,
      name: 'Problem Solving',
      image: '/img/skillsArrayImg/problem-skil.png',
    }
]  

const Skills = () => {
  return (
    <section id='skillSection'>
        <h1>Skills</h1>
          <div className='skills-container'>
              {hardSkills.map((hardSkill) => (
              <div key={hardSkill.id} className="skills-card">
                <img src={hardSkill.image} alt={`${hardSkill.name} logo`} className='skills-card-img'/>
                <h2 className='skills-card-name'>{hardSkill.name}</h2>
                
              </div>
            ))}
            
            <div className='skills-layout-container'></div>
          </div>
          <div className='horizantal-line'/>
          <div className='skills-container'>
          {softSkills.map((softSkill) => (
              <div key={softSkill.id} className="skills-card">
                <img src={softSkill.image} alt={`${softSkill.name}logo`} className='skills-card-img'/>
                <h2 className='skills-card-name'>{softSkill.name}</h2>
                
              </div>
            ))}
          </div>
          <div className='skill-character-img'/>
        
      </section>
  )
}

export default Skills
