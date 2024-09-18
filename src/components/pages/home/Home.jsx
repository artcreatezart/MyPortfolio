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
          <h3>Graphic Designer - Front End Developer - UX Designer</h3>
          <p> As a web devleoper and UX designer I love to create and solve. Whether it's designing or coding I feel this itch and excitment that I want to learn more. The most joy, success and pride comes from being proud of what I've created and especially when users are able to use the application with ease and enjoyment. <br/><br/>
          I enjoy designing clean, simple but effective layout's while also have a love for some different and playful idea's. Whether it's through colour or different ways user's can interact whether it works or not, there is still joy in the trial and error, to be able to test the boundries.<br/><br/>Outside of work I really enjoy creating (sketching, crafts and painting), board games, puzzle games,
          gaming, snuggling with my pets and watching anime. I love to watch and admire animated shows like anime and cool special effects movies. I am also a big
          fan of listening to musical’s, and baking. These are some of the small ways to burst out my enegry that
          bring me joy.</p>
        </div>
      </section>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default Home
