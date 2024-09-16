import React from 'react'

const portfolioProjects = [
  {
      id: 1,
      name: 'Pokedex App',
      type: 'Web Development',
      mockupImage1: '/img/projectArrayImg/pokedexmockup.webp',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      date: '2024',
      credit: '',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      learningDescription: '',
      github: '',
      vercel: '',
      tools: '',
      hardSkills: '',
      softSkills: '',
  },
  {
      id: 2,
      name: 'Newspaper Website',
      mockupImage1: '/img/projectArrayImg/newsmockup.webp',
      type: 'Web Development',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      date: '2024',
      credit: '',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      learningDescription: '',
      github: '',
      vercel: '',
      tools: '',
      hardSkills: '',
      softSkills: '',
  },
  {
      id: 3,
      name: 'Lord of the Fries ',
      mockupImage1: '/img/projectArrayImg/lotfmockup.webp',
      type: 'Web Development',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      date: '2024',
      credit: '',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      learningDescription: '',
      github: '',
      vercel: '',
      tools: '',
      hardSkills: '',
      softSkills: '',
  },
  {
      id: 4,
      name: 'Five Nights At Freddys Website',
      mockupImage1: '/img/projectArrayImg/fnafmockup.webp',
      type: 'Web Development',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      date: '2024',
      credit: 'Abbie (Myself), Kristine and Mere',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      learningDescription: '',
      github: '',
      vercel: '',
      tools: '',
      hardSkills: '',
      softSkills: '',
  },
  {
      id: 5,
      name: 'Accomadation Website',
      mockupImage1: '/img/projectArrayImg/acommockup.webp',
      type: 'Web Development',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      date: '2024',
      credit: '',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      learningDescription: '',
      github: '',
      vercel: '',
      tools: '',
      hardSkills: '',
      softSkills: '',
  },
  {
      id: 6,
      name: 'Portfolio App',
      mockupImage1: '/img/projectArrayImg/portfoliomockup.webp',
      type: 'Web Development',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      date: '2024',
      credit: 'Abbie (Myself), Kristine and Mere',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      learningDescription: '',
      github: 'https://github.com/Kasa-27119/formative-3.2-quantum-quokkas',
      vercel: '',
      tools: '',
      hardSkills: '',
      softSkills: '',
  },
  {
    id: 7,
    name: 'Sculpture Brouchure',
    mockupImage1: '/img/projectArrayImg/brochuremockup.webp',
    type: 'Graphic Design',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
    date: '2024',
    credit: '',
    aboutdescription: 'blah blah blah',
    processDescription: '',
    learningDescription: '',
    github: '',
    vercel: '',
    tools: '',
    hardSkills: '',
    softSkills: '',
  },
  {
    id: 8,
    name: 'Adderstone Packaging',
    mockupImage1: '/img/projectArrayImg/boxmockup.webp',
    type: 'Graphic Design',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
    date: '2024',
    credit: '',
    aboutdescription: 'blah blah blah',
    processDescription: '',
    learningDescription: '',
    github: '',
    vercel: '',
    tools: '',
    hardSkills: '',
    softSkills: '',
  },
]

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


const Home = () => {

  // category select filtering function

  // year select filtering function

  // Clear Filters function

  return (
    <>
      {/* START OF HOME SECTION */}
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
      {/* END OF HOME SECTION */}

      {/* START OF PROJECT SECTION */}
      <section id='projectSection'>
        <div className='top-project-container'>
          <h1>Projects</h1>
          <div className='top-project-filter-container'>
            <div className='select-filter-container'>
              <label htmlFor=''>Type:</label>
              <select name='categorySelect' id='categorySelect'>
                <option value=''>All</option>
                <option value='Graphic Design'>Graphic Design</option>
                <option value='Ux Design'>UX Design</option>
                <option value='Web Development'>Front End Development</option>
              </select>
            </div>
            <div className='select-filter-container'>
              <label htmlFor=''>Year:</label>
              <select name='yearSelect' id='yearSelect'>
                <option value=''>Any</option>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
              </select>
            </div>
            <button>Clear Filters</button>
            <div className='project-character-img'/>
          </div>
          <div className='horizantal-line'/>
          <div id='projectDisplay'>
            {portfolioProjects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.mockupImage1} alt={`${project.name} mockup`} className='project-card-img'/>
                <div className='project-card-img-details'>
                <h2 className='project-card-name'>{project.name}</h2>
                <p className='project-card-credit'>{project.credit}</p>
                </div>
                
              </div>
            ))}
          </div>
          
        </div>
      </section>
      {/* END OF PROJECT SECTION */}

      {/* START OF SKILL SECTION */}
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
      {/* END OF SKILL SECTION */}

      {/* START OF CONTACT SECTION */}
      <section id='contactSection'>
        <h1>Contact</h1>
        <div className='left-contact-container'>
          <div className='sectioned-contact-container'>
            <div className='contact-icon'></div>
            <p>Contact info</p>
          </div>
        </div>
        <div className='right-contact-container'>
          <div className='contact-character-img'/>
        </div>
        
      </section>
      {/* END OF CONTACT SECTION */}
    </>
  )
}

export default Home
