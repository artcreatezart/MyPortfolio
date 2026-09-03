import React from 'react'
import '../aboutMe/aboutMe.scss'
import { useNavigate, useLocation } from 'react-router-dom';

const AboutMe = () => {
  const location = useLocation();
  const navigate = useNavigate();

    const handleNavigation = (targetId) => {
    navigate('/', { state: { targetId } }); 
  };


  return (
    <section id='aboutMeSection'>
      <div className='about-me-container'>
        <div className='profile-photo'>
          {/* <div className='visible-hover'>
            <h3>fun fact: my intials spell art and its something ive been proud of. </h3>
          </div> */}
        </div>
        <div className='about-me-info'>
          <h1>Hiya, I'm Abbie</h1>
          <p>
             
            I'm a UX/UI and graphic designer who loves creating fun, thoughtful, and user-friendly digital experiences.  <br/><br/>
            
            I enjoy turning ideas into designs that are both creative and practical, with a little front-end knowledge helping bridge the gap between design and development. <br/><br/>

            When I'm not designing, you'll usually find me baking, drawing, gaming, travelling, walking dogs, or exploring other creative outlets that keep me inspired.

          </p>
          <div className='info-me-cards'>
            <div className='info-me-card'>
              <h3>📍 Based in </h3>
              <p>Wellington, NZ</p>
            </div>
            <div className='info-me-card'>
              <h3>🎯 Current Focus </h3>
              <p>Creating thoughtful UX</p>
            </div>
            <div className='info-me-card'>
              <h3>💻 Latest Project</h3>
              <p> EMK Website</p>
            </div>
            <div className='info-me-card'>
              <h3>☕ Away From My Desk </h3>
              <p>Drawing, gaming & baking</p>
            </div>
          </div>
          <button className='contact-button'onClick={() => { handleNavigation('contactSection')}}>Let's Chat</button>

        </div>

      </div>
      
      
    
        
        
      </section>
      
  )
}

export default AboutMe
