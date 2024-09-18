import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../projects/projects.scss'

export const portfolioProjects = [
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
        date: '2023',
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
      date: '2023',
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
      date: '2023',
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
          <h1>Projects</h1>
          <div className='top-project-filter-container'>
            <div className='select-filter-container'>
              <label htmlFor=''>Type:</label>
              <select name='categorySelect' 
              id='categorySelect'
              value={selectedType}
              onChange={handleTypeChange}>
                <option value=''>All</option>
                <option value='Graphic Design'>Graphic Design</option>
                <option value='Ux Design'>UX Design</option>
                <option value='Web Development'>Front End Development</option>
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
            <button onClick={clearFilters}>Clear Filters</button>
            <div className='project-character-img'/>
          </div>
          <div className='horizantal-line'/>
          <div id='projectDisplay'>
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <Link to={`/project/${project.id}`}>
                  <img src={project.mockupImage1} alt={`${project.name} mockup`} className='project-card-img'/>
                </Link>
                <div className='project-card-img-details'>
                <h2 className='project-card-name'>{project.name}</h2>
                <p className='project-card-credit'>{project.credit}</p>
                </div>
                
              </div>
            ))}
          </div>
          
        </div>
      </section>
  )
}

export default Projects
