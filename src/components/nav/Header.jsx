import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='logo-container'>
        <div className='logo-img-container'/>
        <Link to='/'>artcreatezart</Link>
      </div>
      <div className='nav-links-container'>
        <ul>
          <li>
            <Link>Projects</Link>
            <Link>Skills</Link>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
