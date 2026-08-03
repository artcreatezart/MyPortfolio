import { useEffect } from 'react'
import '../home/home.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import Projects from '../../sections/projects/Projects'
import Skills from '../../sections/skills/Skills'
import Contact from '../../sections/contact/Contact'
import AboutMe from '../../sections/aboutMe/AboutMe';
import MoreProjects from '../moreProjects/MoreProjects'

const Home = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (targetId) => {
    navigate('/', { state: { targetId } }); 
  };

  useEffect(() => {
    if (location.state && location.state.targetId) {
      const section = document.getElementById(location.state.targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); 
      }
    }
  }, [location]);
  

  return (
    <>
      <section id='homeSection'>
        <div className='left-home-img'/>
          <div className='info-home-container'>
            <h1>Abbie Taylor</h1>
            <h3>UX/UI Designer - Graphic Designer - Front End Developer</h3>
            <p>
             I love blending creativity with thoughtful design to create fun, functional, and user-friendly digital experiences—from clean, modern interfaces to bold,quirky, unique designs.
            </p>
            <button 
              className="top-projects-button" 
              onClick={() => { handleNavigation('topProjectSection')}}

            >
              ↓ Explore My Featured Projects ↓
            </button>
            
            
          </div>
          
          <div className='right-home-img'/>
        
       
      </section>
      <Projects/>
      <Skills/>
      <AboutMe/>
      <Contact/>
    </>
  )
}

export default Home
