import React from 'react'

const Home = () => {

  // category select filtering function

  // year select filtering function

  // Clear Filters function

  return (
    <>
      {/* START OF HOME SECTION */}
      <section id='homeSection'>
        <div className='left-home-container'></div>
        <div className='right-home-container'>
          <h1>Abbie Taylor</h1>
          <h3>Graphic Designer - Front End Developer - UX Designer</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo dicta minus fugiat cupiditate aut, exercitationem quos mollitia perferendis sunt, beatae ab at expedita maiores quasi excepturi unde praesentium? Laboriosam.
          Asperiores enim qui impedit, ab quae corrupti omnis a totam praesentium! Nisi, pariatur? Velit repellat quos veniam ex non praesentium. Voluptas dolor odit accusamus magni beatae maxime mollitia commodi et?
          Deserunt laboriosam quas ullam! <br/><br/>Ex alias facere ad ipsa repudiandae voluptatum odio voluptate eum voluptatibus? Maxime dicta amet ab officiis alias rerum odio debitis, beatae, nostrum, optio et impedit magni!
          Doloremque laudantium quasi illo ea non voluptas, cumque, neque aut labore eius sunt atque ex officia numquam, nam enim. Nam aperiam veniam libero deserunt suscipit excepturi, quibusdam ex laboriosam vitae!
          Dolores doloribus minima eius eos autem. Inventore temporibus obcaecati expedita reprehenderit dolores. Culpa earum assumenda doloribus harum consequuntur eligendi? Cupiditate et repudiandae dolorum incidunt, maiores explicabo itaque error nemo vero.</p>
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
