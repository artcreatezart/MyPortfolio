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
          <h2>{project.type}</h2>
          <h4>Tools: {project.tools}</h4>
          <p className='contribution'>{project.contribution}</p>
          <p className='description'>{project.aboutdescription}</p>
          <p className='description'>{project.processDescription}</p>
          <h4 className='view-text'>View On Github and Vercel!</h4>
          <div className='project-icon-container'>
            <div className=''>
              
            </div>
            <a className='project-icon'
                href={project.vercel}
                target='_blank'>
                  <IoLogoVercel/>
                </a>
                <a className='project-icon'
                href={project.github}
                target='_blank'
                >
                  <FaGithub/>
                </a>
          </div>

        </div>
      
    </div>

    </section>
    
  )
}

export default SingleProject