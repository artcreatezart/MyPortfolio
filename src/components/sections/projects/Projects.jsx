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
        aboutdescription: 'In this project, I created a Pokedex website using an external API called PokeApi. The website allows users to view a full Pokedex, search for specific Pokémon, and filter them by type or name. Users can also clear the filters to return to the full list. The main goal of the project was to learn how to work with external APIs and understand their usefulness. As a visual learner, I find it easier to design websites after deciding on a theme or style. For this project, I drew inspiration from the Pokémon Legends: Arceus game, using its color scheme, fonts, and overall design aesthetic for the websites look and feel.',
        processDescription: 'This project focused on working with an API and its functionality, so I didnt spend much time on pre-production tasks. I gathered a few small assets, such as colors, images, and styles inspired by the Pokémon Legends: Arceus game, which helped me establish a design concept. I started by setting up the main files and folder structure, linking everything correctly. I tested in the console and terminal to catch any sneaky errors. After that, I proceeded to call the API and retrieved specific data elements to display on my Pokedex website',
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
        type: ['Web Development', 'Ux Design'],
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
        type: ['Web Development', 'Ux Design'],
        image2: '/img/projectArrayImg/fnaf2.png',
        image3: '/img/projectArrayImg/fnaf3.png',
        image4: '/img/projectArrayImg/fnaf4.png',
        image5: '/img/projectArrayImg/fnaf5.png',
        image6: '/img/projectArrayImg/fnaf6.png',
        date: '2023',
        credit: '',
        aboutdescription: 'This was one of the first full websites I coded. This website promoting what was a upcoming film Five Nights At Freddys allows users to checkout an overview of the film, watch a trailer from the site, learn more about the animatronics, checkout film posters by clicking on cameras, and reading about what the film is based off and its origin. For this project one thing i looked into was cursor trends and i thought it would be fun to try creating a dynamic cursor. So this website deatures a flashlight cursor that allows you to interact and discover elements throughout the website.',
        processDescription: 'I started off doing thorough research of SWOT analysis, cursor trends, moodboard, style tile, and user testing. After anyalising pre-production and making the appropriate needed changes and considerations. I started coding, first off focusing getting all the content and basic needs and linking into the html file. Then editing layout and style of those elements in css before getting the dynamic cursor to work from Javascript. This was my first time experiencing Javascript it wasnt needed for this project but i am glad i got to check it out when i did. ',
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
        type: ['Web Development', 'Ux Design'],
        image2: '/img/projectArrayImg/acom2.png',
        image3: '/img/projectArrayImg/acom3.png',
        image4: '/img/projectArrayImg/acom4.png',
        image5: '/img/projectArrayImg/acom5.png',
        image6: '/img/projectArrayImg/acom6.png',
        date: '2024',
        credit: '',
        aboutdescription: 'This accommodation web app allows users to explore lodging options across New Zealand and discover nearby animal attractions. The app aims to encourage users to get outside, promote well-being, and support local animal sanctuaries. Users can input their accommodation preferences into a form, which leads them to a filtered accommodation page. While the app does not yet have full functionality—such as animal attraction maps—the main focus was on creating a user-friendly navigation experience. Additionally, the app enables users to specify if they want a meal plan. At the end, it calculates the total price and provides information for users to review and confirm their selections.',
        processDescription: 'For this project, pre-production involved initial research, analysis of competitor websites, creating a mood board, setting a header, developing a style tile, and prototyping based on wireframes, low-fidelity, and high-fidelity designs. After planning how the code would be structured and tackled, I began coding, starting with basic HTML and content. I then focused on getting functionality working before moving on to CSS. Although I didnt accomplish as much as I had hoped, Im satisfied with the progress I made in the end.',
        github: 'https://github.com/artcreatezart/Accomadation-App',
        vercel: 'https://accomadation-app.vercel.app/',
        tools: 'Vs Code - Figma - Indesign - Photoshop',
        hardSkills: 'Gulp - HTML - SCSS - JS ',
        softSkills: 'Problem Solving - Time Management',
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
        aboutdescription: 'Our team built a full-stack CRUD portfolio app that allows users to sign up, log in, and create, edit, and delete project posts. The primary goal was to enhance our GitHub collaboration skills and deepen our understanding of full-stack CRUD applications. We also rotated team roles (team member, scrum master, product owner) to gain experience in various aspects of the development process.',
        processDescription: 'Before building the website, our team discussed expectations, strengths, and weaknesses. We created a task list, app flow diagrams, wireframes, and established the basic file structure for both the front and back end. During coding, we maintained close communication, ensuring that only one person worked on individual files at a time to avoid GitHub merge conflicts. One team member was responsible for overseeing GitHub to maintain consistency. Early in the process, we encountered errors related to not calling components into app.jsx. While others focused on backend tasks, and i worked on resolving these issues. Overall, the project progressed smoothly, thanks to our constant communication and teamwork in troubleshooting challenges together.',
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
      aboutdescription: 'This project was designed for tourists to explore sculptures around Wellington, highlighting a few worthwhile café stops and providing an example of a route visitors could follow to see all the sculptures. Each sculpture includes a brief description, and one of the blurbs features information and behind-the-scenes photos from an artist I was fortunate to connect with. This experience allowed me to engage with other artists and gain deeper insights into the local community.',
      processDescription: 'The process began by identifying the problem and solution, which helped define the target audience and the main purpose of the brochure. I then researched competitor brochures, focusing on typography, color, graphics, relevant information, and considerations of Māori values. After analyzing this information and establishing a design direction, I created wireframes and gathered feedback. I used this analyzed feedback to make necessary adjustments and refine my ideas. I repeated this cycle of creation and feedback several times until I reached a final design, which I successfully tested. Next, I conducted printing tests on different types of paper and examined the folds of the brochure, making edits where needed. After numerous tests and iterations, I arrived at a final result that I was very pleased with."',
      github: 'https://github.com/artcreatezart',
      vercel: 'https://vercel.com/abbies-projects-93142625',
      tools: 'Photoshop - Email - Illustrator ',
      hardSkills: 'Photoshop - Illustrator - Indesign',
      softSkills: 'Creativity',
    },
    {
      id: 8,
      name: 'HUHA Website',
      mockupImage1: '/img/projectArrayImg/huhamockup.png',
      type: ['Web Development', 'Ux Design'],
      image2: '/img/projectArrayImg/huhaimg2.png',
        image3: '/img/projectArrayImg/huhaimg6.png',
        image4: '/img/projectArrayImg/huhaimg3.png',
        image5: '/img/projectArrayImg/huhaimg5.png',
        image6: '/img/projectArrayImg/huhaimg4.png',
      date: '2024',
      credit: '',
      aboutdescription: 'This website was created to allow users to find out about HUHA, what they can do to support, adopt animals, shop and donate. Via wordpress the "client" can add new, edit and delete posts through custom post types such as, campaigns, trustees, animals, stories, and products. Aswell as adding parts of information via feild types such as Animal: breed, age, vaccination, desexed and links to sponsors and campaigns websites / media. There is also access to customise background color, primary button background color, secondary button background color, logo, header fonts, sectioned colors, and logo that clients can change wihtout having to go through code.',
      processDescription: 'For this project it started with pre planning elements such as research (survey, user testing, competive analysis), header set, style tile, moodboard and prototypes. Then moved onto the planning for the development of the website such as customisation plan and technical code plan on how each functionailty would work. Finally it got to coding and testing throughout to ensure a thorough design and functionailty all working as needed. Plus working on responsivness and any other considerations for accessibility, cultural / sociallogical issues that could be addressed and solved wihtin the design. Throughout this process i was communicating with client over email (for updates, possible issues, and considerations) and had meetings to go over whats been done and take any feedback, and make any neccassry changes, ',
      github: 'https://github.com/artcreatezart',
      githubFrontend: 'https://github.com/artcreatezart/HUHAFrontend',
      githubBackend: 'https://github.com/artcreatezart/HUHACustomTheme',
      vercel: 'https://huha-frontend.vercel.app/',
      tools: 'Wordpress, Github, VSCODE',
      hardSkills: 'React - Vite - NPM - Wordpress',
      softSkills: 'Time Management - Client Communication - Review Meetings',
    },
    {
      id: 9,
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
      aboutdescription: 'This project was to create packaging for a Adderstone necklace froma fictional world called "Acient Magis Bride". This packaging was to reflect the preciousness of the stone while also showing the earthy and magical elements of this product. To evoke what this stone necklace was, was done through not only the graphic design but also the structual design of the packaging and how elements fitted together.',
      processDescription: 'For this packaging design, I researched all about the typography, graphic, colour, packaging/structural elements from the fictional world aswell as the modern world. I also looked into how resources would be collected ethically from this fictional world and how material are processed and used in the final packaging to reflect if theyre would be any long term negative affects on the enviroment. After doing all the research, I looked into wireframes, and designs of not only the graphics but also the strucutral side of the packaging. Alot of testing, feedback analysing, adjustments and developments lead to the end success of this product. I also was really excited to be able to incoporate alot of hand crafted elements to this packaging as this fictional world was based with magic and alot of hand crafted tools I really wanted to be able to show that throught this design. So i created a stamp the shop would use to brand their logo onto the final packaging, a handwritten note from the forager who gathered the stone and details about that specific stone for the product. Aswell as a sewn strip of fabric to wrap the necklace and a sewn pillow of sort for the necklace to sit in the box.',
      github: 'https://github.com/artcreatezart',
      vercel: 'https://vercel.com/abbies-projects-93142625',
      tools: 'Sewing Machine - Calligraphy Pen',
      hardSkills: 'Photoshop - Indesign - Sewing - Calligraphy',
      softSkills: 'Creativity - Time Management',
    }
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
    const matchesType = selectedType === '' || 
        (Array.isArray(project.type) ? project.type.includes(selectedType) : project.type === selectedType);
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
