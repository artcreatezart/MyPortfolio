import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../projects/projects.scss'
import { ArrowRight } from 'react-bootstrap-icons'

export const portfolioProjects = [
    {
        id: 1,
        name: 'Pokedex App',
        type: 'Web Development',
        mockupImage1: '/img/projectArrayImg/pokedexmockup.webp',
        image2: '/img/projectArrayImg/pokedex2.png',
        image3: '/img/projectArrayImg/pokedex_mockup_abbie_1.png',
        image4: '/img/projectArrayImg/pokedex4.png',
        image5: '/img/projectArrayImg/pokedex5.png',
        image6: '/img/projectArrayImg/pokedex6.png',
        date: '2024',
        credit: '',
        aboutdescription: 'blah blah blah',
        processDescription: 'blah blah blah',
        github: 'https://github.com/artcreatezart/pokedex',
        vercel: 'https://pokedex-iota-blond.vercel.app/',
        tools: '',
        hardSkills: '',
        softSkills: '',
    },
    {
        id: 2,
        name: 'Newspaper Website',
        mockupImage1: '/img/projectArrayImg/newsmockup.webp',
        type: 'Web Development',
        image2: '/img/projectArrayImg/newspaper2.png',
        image3: '/img/projectArrayImg/newspaper3.png',
        image4: '/img/projectArrayImg/newspaper4.png',
        image5: '/img/projectArrayImg/newspaper5.png',
        image6: '/img/projectArrayImg/newspaper6.png',
        date: '2024',
        credit: '',
        aboutdescription: 'blah blah blah',
        processDescription: '',
        github: 'https://github.com/artcreatezart',
        vercel: 'https://vercel.com/abbies-projects-93142625',
        tools: '',
        hardSkills: '',
        softSkills: '',
    },
    {
        id: 3,
        name: 'Lord of the Fries ',
        mockupImage1: '/img/projectArrayImg/lotfmockup.webp',
        type: 'Web Development',
        image2: '/img/projectArrayImg/lotf2.png',
        image3: '/img/projectArrayImg/lotf3.png',
        image4: '/img/projectArrayImg/lotf4.png',
        image5: '/img/projectArrayImg/lotf5.png',
        image6: '/img/projectArrayImg/lotf6.png',
        date: '2024',
        credit: '',
        aboutdescription: 'blah blah blah',
        processDescription: '',
        github: 'https://github.com/artcreatezart/lordofthefries',
        vercel: 'https://lordofthefries-ruddy.vercel.app/',
        tools: '',
        hardSkills: '',
        softSkills: '',
    },
    {
        id: 4,
        name: 'Five Nights At Freddys Website',
        mockupImage1: '/img/projectArrayImg/fnafmockup.webp',
        type: 'Web Development',
        image2: '/img/projectArrayImg/fnaf2.png',
        image3: '/img/projectArrayImg/fnaf3.png',
        image4: '/img/projectArrayImg/fnaf4.png',
        image5: '/img/projectArrayImg/fnaf5.png',
        image6: '/img/projectArrayImg/fnaf6.png',
        date: '2023',
        credit: '',
        aboutdescription: 'blah blah blah',
        processDescription: '',
        github: 'https://github.com/artcreatezart/Five-Nights-at-Freddys-Film-Website---Project',
        vercel: 'https://five-nights-at-freddys-film-website-project.vercel.app/',
        tools: '',
        hardSkills: '',
        softSkills: '',
    },
    {
        id: 5,
        name: 'Accomadation Website',
        mockupImage1: '/img/projectArrayImg/acommockup.webp',
        type: 'Web Development',
        image2: '/img/projectArrayImg/acom2.png',
        image3: '/img/projectArrayImg/acom3.png',
        image4: '/img/projectArrayImg/acom4.png',
        image5: '/img/projectArrayImg/acom5.png',
        image6: '/img/projectArrayImg/acom6.png',
        date: '2024',
        credit: '',
        aboutdescription: 'blah blah blah',
        processDescription: '',
        github: 'https://github.com/artcreatezart/Accomadation-App',
        vercel: 'https://accomadation-app.vercel.app/',
        tools: '',
        hardSkills: '',
        softSkills: '',
    },
    {
        id: 6,
        name: 'Portfolio App',
        mockupImage1: '/img/projectArrayImg/portfoliomockup.webp',
        type: 'Web Development',
        image2: '/img/projectArrayImg/port2.png',
        image3: '/img/projectArrayImg/port3.png',
        image4: '/img/projectArrayImg/port4.png',
        image5: '/img/projectArrayImg/port5.png',
        image6: '/img/projectArrayImg/port6.png',
        date: '2024',
        credit: 'Team project: Abbie (Myself), Kristine and Mere',
        contribution: 'wireframes, some backend code and front end.',
        aboutdescription: 'Our team built a full-stack CRUD portfolio app where users can sign up, log in, create, edit, and delete project posts. The primary goal was to learn GitHub collaboration and deepen our understanding of full-stack CRUD applications. We also rotated team roles (team member, scrum master, product owner) to gain experience in different aspects of the development process.',
        processDescription: 'Before building the website, our team discussed expectations, strengths, and weaknesses. We set up a task list, app flow diagrams, wireframes, and established the basic file structure for both the front and back end. During coding, we communicated closely, ensuring only one person worked on individual files at a time to avoid GitHub merge conflicts. One person oversaw GitHub to maintain consistency. Early on, we faced errors from not calling components into app.jsx, but while others focused on backend tasks, I resolved the issues. Overall, the project ran smoothly thanks to constant communication and teamwork in troubleshooting problems together.',
        github: 'https://github.com/Kasa-27119/formative-3.2-quantum-quokkas',
        vercel: 'https://vercel.com/abbies-projects-93142625',
        tools: 'Trello, ',
        hardSkills: 'React - Bootstrapicons - nodemon - npm - mongoose - Trello - VSCode',
        softSkills: 'Team work - Leadership - time management',
    },
    {
      id: 7,
      name: 'Sculpture Brouchure',
      mockupImage1: '/img/projectArrayImg/brochuremockup.webp',
      type: 'Graphic Design',
      image2: '/img/projectArrayImg/bro2.png',
        image3: '/img/projectArrayImg/bro3.png',
        image4: '/img/projectArrayImg/bro4.png',
        image5: '/img/projectArrayImg/bro5.png',
        image6: '/img/projectArrayImg/bro6.png',
      date: '2023',
      credit: '',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      github: 'https://github.com/artcreatezart',
      vercel: 'https://vercel.com/abbies-projects-93142625',
      tools: '',
      hardSkills: '',
      softSkills: '',
    },
    {
      id: 8,
      name: 'Adderstone Packaging',
      mockupImage1: '/img/projectArrayImg/boxmockup.webp',
      type: 'Graphic Design',
      image2: '/img/projectArrayImg/box2.png',
        image3: '/img/projectArrayImg/box3.png',
        image4: '/img/projectArrayImg/box4.png',
        image5: '/img/projectArrayImg/box5.png',
        image6: '/img/projectArrayImg/box6.png',
      date: '2023',
      credit: '',
      aboutdescription: 'blah blah blah',
      processDescription: '',
      github: 'https://github.com/artcreatezart',
      vercel: 'https://vercel.com/abbies-projects-93142625',
      tools: '',
      hardSkills: '',
      softSkills: '',
    },
  ]  

const Projects = () => {

  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Handle type change
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Handle year change
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // Clear the filters
  const clearFilters = () => {
    setSelectedType('');
    setSelectedYear('');
  };

  // Filter the projects based on selected filters
  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesType = selectedType === '' || project.type === selectedType;
    const matchesYear = selectedYear === '' || project.date === selectedYear;
    return matchesType && matchesYear;
  });

  return (
    
      <section id='projectSection'>
        <div className='top-project-container'>
          <div className='top-project-filter-container'>    
            <div className='left-top-project-filter-container'>
              <h1>Projects</h1>
              <div className='bottom-project-filter-container'>
                <div className='select-filter-container'>
                  <label htmlFor=''>Type:</label>
                  <select name='categorySelect' 
                  id='categorySelect'
                  value={selectedType}
                  onChange={handleTypeChange}>
                    <option value=''>All</option>
                    <option value='Graphic Design'>Graphic Design</option>
                    <option value='Ux Design'>UX Design</option>
                    <option value='Web Development'>Web Development</option>
                  </select>
                </div>
                <div className='select-filter-container'>
                  <label htmlFor=''>Year:</label>
                  <select name='yearSelect' 
                  id='yearSelect' 
                  value={selectedYear}
                  onChange={handleYearChange}>
                    <option value=''>Any</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                  </select>
                </div>
                <button onClick={clearFilters} className='clear-button'>Clear Filters</button>
              </div>
            </div>
            <div className='project-character-img'/>  
          </div>
          <div className='horizantal-line'/>
          <div id='projectDisplay'>
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                  <img src={project.mockupImage1} alt={`${project.name} mockup`} className='project-card-img'/>
                <Link to={`/project/${project.id}`}>
                  <div className='project-card-img-details'>
                    <h2 className='project-card-name'>{project.name}</h2>
                    <button className='see-more-button'>See More <ArrowRight/></button>
                  </div>
                </Link>
                
                
              </div>
            ))}
          </div>
          
        </div>
      </section>
  )
}

export default Projects
