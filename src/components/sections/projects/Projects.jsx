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
        aboutdescription: 'In this Project I created a Pokedex website using an external Api called PokeApi. This website allows users to view the pokedex, target a single pokemon and find more about them and filter by search, type and clear off the filters. The main purpose of this was to learnhow to use external api and how it is useful. I find creating websites easier after i find a theme or style as I am quite a visual person and so I used Pokemon Arceus Game as inspiration for the colours, font and styling.',
        processDescription: 'This project was a focus on api and the functionailty so i didnt do much pre-production things except gathering some small assests like colours, images and styles based off the Pokemon Arceus game so i had a idea for the style. I started off by setting up the main files and folder structure making sure everything was linked and tested in console and terminal to check for sneaky errors. The proceded to call the Api and grabbed specific data elements to display on my pokedex website. ',
        github: 'https://github.com/artcreatezart/pokedex',
        vercel: 'https://pokedex-iota-blond.vercel.app/',
        tools: 'PokeApi - VS Code ',
        hardSkills: 'React - HTML - CSS - JS ',
        softSkills: 'Problem Solving ',
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
        aboutdescription: 'This Website allows users to view the latest news, filter by news source, category and search and also allows you to clear the filters. It uses a External Api called NewsApi to gether all the data needed to call on for the display news headlines in the website. It also allows you to find out more about that news article, and read an about section of the creator of the webiste and read more about the project itself.',
        processDescription: 'This project was focused on functionaility so for pre-production i just did a little bit of wireframes and style tile so i knew the direction this website will go towards. As I also find it easier to work on a project and envision how functionailty will work and setting up the html ready for the styling/layout. Then procceded to setting up the file and folder structure, linking everything. Which lead into starting to call the data in and make sure everything was displaying correctly.',
        github: 'https://github.com/artcreatezart',
        vercel: 'https://vercel.com/abbies-projects-93142625',
        tools: 'NewsApi - VS Code',
        hardSkills: 'React - HTML - CSS - JS',
        softSkills: 'Problem Solving',
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
        aboutdescription: 'This Project I made a Table ordering system app that users can use from the tables, handheld devices or at the front of the restaurant. They can view top deals, add burgers to the card and then procced with checkout ',
        processDescription: 'I did alot of pre-production with thorough analysis for this project, doing SWOT analysis, prototyping, user testing, usability testing, feild research, user feedback analysis, style tile, header set, and moodboard. I really enjoy going thorogh into these things as i beileve it sets up a higher chance of success with both looking appealing but also users being able to navigate with ease. After testing the figma prototypes, i went into setting up files and folders and then coding the basic navigation sequence. I did find i ran out of time so i learnt from this, is the important part of getting everything nessacry to function with ease is top priority then i can worry about the style. ',
        github: 'https://github.com/artcreatezart/lordofthefries',
        vercel: 'https://lordofthefries-ruddy.vercel.app/',
        tools: 'Figma - VS Code',
        hardSkills: 'HTML - SASS - JS',
        softSkills: 'Problem Solving - Time Management',
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
        aboutdescription: 'This was one of the first full websites I coded. This website promoting what was a upcoming film Five Nights At Freddys allows users to checkout an overview of the film, watch a trailer from the site, learn more about the animatronics, checkout film posters by clicking on cameras, and reading about what the film is based off and its origin.',
        processDescription: 'For this project i started off with pre-production looking at ',
        github: 'https://github.com/artcreatezart/Five-Nights-at-Freddys-Film-Website---Project',
        vercel: 'https://five-nights-at-freddys-film-website-project.vercel.app/',
        tools: 'Figma - Indesign - VS Code',
        hardSkills: 'HTML - CSS - JS',
        softSkills: 'Problem Solving',
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
        softSkills: 'Team work - Leadership - time management - Creativity',
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
                <Link to={`/project/${project.id}`} >
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
