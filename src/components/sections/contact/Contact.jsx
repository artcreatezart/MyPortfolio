import React from 'react'
import '../contact/contact.scss'

const Contact = () => {
  return (
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
  )
}

export default Contact
