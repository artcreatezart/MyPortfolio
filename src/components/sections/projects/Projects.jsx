import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../projects/projects.scss'
import { ArrowRight } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

import { portfolioProjects } from '../../pages/moreProjects/MoreProjects'

const TopProjects = () => {
  const navigate = useNavigate();

 const featuredProjects = portfolioProjects.filter(project =>
  [1, 9, 4].includes(project.id)
);
  

  return (
    <section id="topProjectSection">

      <h1>Featured Projects</h1>

      <div className="projects-container" >
       {featuredProjects.map(project => (
      
      <Link to={`/project/${project.id} `} key={project.id}  >
        <div  className="project-card">
        <div className="project-image">
          <img src={project.mockupImage1} alt={project.name} />
        </div>
        

        <div className="project-card-content">
          <h2>{project.name}</h2>
          <button>View Project →</button>
        </div>
      </div>
                  
                </Link>
    ))}
  </div>
      <button 
                className="other-projects-button" onClick={() => { navigate("/more-projects");}}
            >
              Check Out My Other Projects →
      </button>


    </section>
  )
}

export default TopProjects;