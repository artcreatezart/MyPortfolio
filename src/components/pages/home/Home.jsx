import { useEffect } from 'react'
import '../home/home.scss'
import { useLocation } from 'react-router-dom';
import Projects from '../../sections/projects/Projects'
import Skills from '../../sections/skills/Skills'
import Contact from '../../sections/contact/Contact'

const Home = () => {

  const location = useLocation();

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
        <div className='left-home-img-container'></div>
        <div className='right-home-container'>
          <h1>Abbie Taylor</h1>
          <h3>Graphic Designer - Front End Developer - UX/UI Designer</h3>
          <p> As a web developer and UX designer, I love creating and problem-solving. Whether designing or coding, I'm driven by the excitement of learning and improving. My greatest satisfaction comes from seeing users enjoy and effortlessly navigate the applications I build.
          <br/><br/>
          I enjoy crafting clean, simple layouts but also experimenting with playful, creative ideas, embracing trial and error to push boundaries.
          <br/><br/>
          Outside of work, I love sketching, painting, playing board games, gaming, snuggling with my pets, and watching anime. I'm also a fan of musicals, baking, and finding joy in little creative outlets.</p>
        </div>
      </section>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default Home
