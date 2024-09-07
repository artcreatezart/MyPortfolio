import React from 'react'


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
              <select name='categorySelect' id='categorySelect'>
                <option value=''>All</option>
                <option value='graphicDesign'>Graphic Desing</option>
                <option value='uxDesign'>UX Design</option>
                <option value='frontendDevelopment'>Front End Development</option>
              </select>
            </div>
            <div className='select-filter-container'>
              <select name='yearSelect' id='yearSelect'>
                <option value=''>Any</option>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
              </select>
            </div>
            <button>Clear Filters</button>
          </div>
          <div id='projectDisplay'/>
          <div className='project-character-img'/>
        </div>
      </section>
      {/* END OF PROJECT SECTION */}

      {/* START OF SKILL SECTION */}
      <section id='skillSection'>
        <h1>Skills</h1>
        <div className='hard-skills-container'>
          <div className='skills-layout-container'></div>
        </div>
        <div className='line-divider'/>
        <div className='soft-skills-container'>
          <div className='skills-layout-container'></div>
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
