import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs 
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                formData,
                USER_ID
            )
            .then(
                (response) => {
                    toast.success('Message Sent successfully! Thank you for your message :)')
                    setFormData({name: '', email: '', subject: '', message: ''});
                },
                (error) => {
                    toast.error('Failed to send message. Please try again')
                }
            );
    }

  return (
    <div>
        <Toaster position='top-center'/>
      <form onSubmit={handleSubmit}>

        <label>Name:
            <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
            />
        </label>

        <label>Contact Email:
            <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
            />
        </label>

        <label>Subject:
            <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
            />
        </label>

        <label>Message:
            <textarea 
                name='message'
                value={formData.message}
                onChange={handleChange}
                required >

            </textarea>
        </label>

        <button type='submit'>Send a Message</button>

      </form>
    </div>
  )
}

export default ContactForm
