import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => {

  const handleScroll = (event, targetId) => {
    event.preventDefault(); 
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <nav>
      <div className='logo-container'>
        <div className='logo-img-container'/>
        <Link 
                className='nav-link' 
                to='#' 
                onClick={(e) => handleScroll(e, 'homeSection')}
            >
              artcreatezart
            </Link>
      </div>
      <div className='nav-links-container'>
        <ul>
          <li>
            <Link 
                className='nav-link' 
                to='#' 
                onClick={(e) => handleScroll(e, 'projectSection')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
                className='nav-link' 
                to='#' 
                onClick={(e) => handleScroll(e, 'skillSection')}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
                className='nav-link' 
                to='#' 
                onClick={(e) => handleScroll(e, 'contactSection')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
