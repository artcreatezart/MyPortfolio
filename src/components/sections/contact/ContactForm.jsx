import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID

const ContactForm = () => {
   

  return (
    <div>
      <form >

        <label>Name:
            <input
                type='text'
                name='name'
                required
            />
        </label>

        <label>Contact Email:
            <input
                type='text'
                name='email'
                
                required
            />
        </label>

        <label>Subject:
            <input
                type='text'
                name='subject'
              
                required
            />
        </label>

        <label>Message:
            <textarea 
                name='message'
                
                required >

            </textarea>
        </label>

        <button >Send a Message</button>

      </form>
    </div>
  )
}

export default ContactForm
