import React from 'react'
import { useParams } from 'react-router-dom';
import { portfolioProjects } from '../../sections/projects/Projects'

const SingleProject = () => {
  const {id} = useParams();

  const project = portfolioProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }
  
  return (
    
    <div className='single-article-container'>
      <div className='left-article-container'>
        <h1>{project.name}</h1>
        <h3>{project.credit}</h3>
        <h2>{project.type}</h2>
        
        <div className='img-grid'>
          <img className='grid-img-1' src={project.mockupImage1}/>
          <img className='grid-img-2' src={project.image2}/>
          <img className='grid-img-3' src={project.image3}/>
          <img className='grid-img-4' src={project.image4}/>
          <img className='grid-img-5' src={project.image5}/>
          <img className='grid-img-6' src={project.image6}/>
        </div>
      </div>
      
    </div>
  )
}

export default SingleProject
