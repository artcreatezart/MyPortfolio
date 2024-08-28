import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='logo-container'>
        <div className='logo-img-container'/>
        <Link to='/' className='logo-name'>artcreatezart</Link>
      </div>
      <div className='nav-links-container'>
        <ul>
          <li>
            <Link className='nav-link'>Projects</Link>
            <Link className='nav-link'>Skills</Link>
            <Link className='nav-link'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
