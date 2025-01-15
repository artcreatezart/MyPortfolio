import React from 'react'
import '../contact/contact.scss'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contactSection'>
        <div className='left-contact-container'>
        <h1>Contact</h1>
        <h6>Based In Wellington </h6>
          <div className='sectioned-contact-container'>
            <div className='contact-container'>
              <MdOutlineEmail/>
              <div className='email-container'>
                <h5 className='contact-title'>Email:</h5>
                <h5>artdesignswork@hotmail.com</h5>
              </div>
              <ContactForm/>
            </div>

            
            
            <div className='contact-social-container'>
              <h4>Check out my Socials!</h4>
              <div className='social-container'>
                <a className='social-contact-container'
                href='https://www.instagram.com/artcreatezart/?igsh=MWI5Z3NwajExNTJvZw%3D%3D'
                target='_blank'>
                  <FaInstagram/>
                  <h5>artcreatezart</h5>
                </a>
                <a className='social-contact-container' href='https://github.com/artcreatezart' target='_blank'>
                  <FaGithub/>
                  <h5>artcreatezart</h5>
                </a>
                <a className='social-contact-container'
                href='https://vercel.com/abbies-projects-93142625'
                target='_blank'>
                  <IoLogoVercel/>
                  <h5>artcreatezart</h5>
                </a>
                
              </div>

            </div>
            <div className='logo-contact'>
              <div className='logo-img-contact'/>
              <h4>Thanks <br/>for <br/>visiting <br/>my <br/>website!</h4>
            </div>
            
            
          </div>
        </div>
        <div className='right-contact-container'>
          <div className='contact-character-img'/>
        </div>
        
      </section>
  )
}

export default Contact
