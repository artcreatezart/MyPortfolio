import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../header/header.scss'

const Header = () => {

  const navigate = useNavigate();

  const handleNavigation = (targetId) => {
    navigate('/', { state: { targetId } }); 
  };

  return (
    <nav>
      <div className='logo-container'>
        <div className='logo-img-container'/>
        <button 
                className='name-nav-link' onClick={() => handleNavigation('homeSection')}
            >
              artcreatezart
            </button>
      </div>
      <div className='nav-links-container'>
        <ul>
          <li>
            <button 
                className='nav-link' onClick={() => handleNavigation('projectSection')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
                className='nav-link' onClick={() => handleNavigation('skillSection')}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
                className='nav-link' onClick={() => handleNavigation('contactSection')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
