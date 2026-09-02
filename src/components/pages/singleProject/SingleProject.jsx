import React, {useState} from 'react'
import '../singleProject/singleProject.scss'
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioProjects } from '../../pages/moreProjects/MoreProjects'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";


const SingleProject = () => {

  const navigate = useNavigate();

  const handleNavigation = (targetId) => {
    navigate('/', { state: { targetId } }); 
  };

  const {id} = useParams();

  const project = portfolioProjects.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    project.mockupImage1,
    project.image2,
    project.image3,
    project.image4,
    project.image5,
    project.image6,
    project.image7
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1
      );
    };

  const previousImage = () => {
    setCurrentImage((current) =>
    current === 0 ? images.length - 1 : current - 1
    );
  };

  if (!project) {
    return <h2>Project not found</h2>;
  }
  
  return (
    <section id='singleProjectSection'>
      <button 
                className='back-button' onClick={() => { navigate("/more-projects");}}
            >
             ←  Go Back
            </button>

      <div className='single-project-container'>
      <div className='project-carousel'>

        <img
          src={images[currentImage]}
          alt={`${project.name} ${currentImage + 1}`}
          className='carousel-img'
        />

        {images.length > 1 && (
          <div className='carousel-buttons'>
          
            <button
              className='carousel-button carousel-left'
              onClick={previousImage}
            >
              <ArrowLeft />
            </button>

            <div className='carousel-counter'>
              {currentImage + 1} / {images.length}
            </div>

            <button
              className='carousel-button carousel-right'
              onClick={nextImage}
            >
              <ArrowRight />
            </button>

            
          </div>
        )}

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
          <p className='description'>SKILLS: {project.hardSkills}  |  {project.softSkills}</p>
          <div className='bottom-container'>
            <div className='github-link-container'>
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
              <p className='disclaimer-text'>*This project was made for educational purposes only.</p>
          
            </div>
              <div className='single-project-character-img-container'/>
          </div>
          
        </div>
        
      
    </div>

    </section>
    
  )
}

export default SingleProject
