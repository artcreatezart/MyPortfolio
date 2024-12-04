import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../header/header.scss'
import { useState } from 'react'

const Header = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (targetId) => {
    navigate('/', { state: { targetId } }); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`${isOpen ? 'menu-open' : ''}`}>
      <div className='logo-container'>
        <div className='logo-img-container'/>
        <button 
                className='name-nav-link' onClick={() => {handleNavigation('homeSection'); closeMenu();}}
            >
              artcreatezart
            </button>
      </div>

      <div className='menu-icon' onClick={toggleMenu}>
        <div className={`bar bar1 ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`bar bar2 ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`bar bar3 ${isOpen ? 'toggle' : ''}`}></div>
      </div>

      <div className={`nav-links-container ${isOpen ? 'menu-open-background' : ''}`}>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <button 
                className='nav-link' onClick={() => {handleNavigation('projectSection'); closeMenu();}}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
                className='nav-link' onClick={() => {handleNavigation('skillSection'); closeMenu();}}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
                className='nav-link' onClick={() => { handleNavigation('contactSection'); closeMenu();}}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
