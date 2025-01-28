import React from 'react'
import '../singleProject/singleProject.scss'
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioProjects } from '../../sections/projects/Projects'
import { ArrowLeft } from 'react-bootstrap-icons'
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";


const SingleProject = () => {

  const navigate = useNavigate();

  const handleNavigation = (targetId) => {
    navigate('/', { state: { targetId } }); 
  };

  const {id} = useParams();

  const project = portfolioProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }
  
  return (
    <section id='singleProjectSection'>
      <button 
                className='arrow' onClick={() => handleNavigation('projectSection')}
            >
              <ArrowLeft/> Go Back
            </button>

      <div className='single-project-container'>
      <div className='img-grid'>
          <img className='grid-img-1' src={project.mockupImage1}/>
          <img className='grid-img-2' src={project.image2}/>
          <img className='grid-img-3' src={project.image3}/>
          <img className='grid-img-4' src={project.image4}/>
          <img className='grid-img-5' src={project.image5}/>
          <img className='grid-img-6' src={project.image6}/>
        </div>
        <div className='right-project-container'>
          <h1>{project.name}</h1>
          <h3>{project.credit}</h3>
          <h2>{Array.isArray(project.type) ? project.type.join(" - ") : project.type}</h2>
          <h4>Tools: {project.tools}</h4>
          <p className='contribution'>{project.contribution}</p>
          <p className='description'>{project.aboutdescription}</p>
          <p className='description'>{project.processDescription}</p>
          {project.disclaimer ? (

              <p className='description disclaimer' href={project.disclaimer} target='_blank'>Disclaimer: {project.disclaimer}</p>
                ) : null}
          <p className='description'>Main Hard Skills Used: {project.hardSkills}</p>
          <p className='description'>Soft Hard Skills Used: {project.softSkills}</p>
          <h4 className='view-text'>View On Github and Vercel!</h4>
          <div className='project-icon-container'>
            <a className='project-icon'
                href={project.github}
                target='_blank'
                >
                  <FaGithub/>
                  <p>Github</p>
                </a>
                {project.githubFrontend ? (
                  <a className='project-icon' href={project.githubFrontend} target='_blank'>
                    <FaGithub />
                    <p>Frontend</p>
                  </a>
                ) : null}
                {project.githubBackend ? (
                  <a className='project-icon' href={project.githubBackend} target='_blank'>
                    <FaGithub />
                    <p>Backend</p>
                  </a>
                ) : null}
            <a className='project-icon'
                href={project.vercel}
                target='_blank'>
                  <IoLogoVercel/>
                  <p>Live Website</p>
                </a>
          </div>
          <div className='single-project-character-img-container'/>
        </div>
        
      
    </div>

    </section>
    
  )
}

export default SingleProject
