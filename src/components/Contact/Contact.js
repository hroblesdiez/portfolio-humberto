import { MdContactMail, MdEmail, MdPhone } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import SectionTitle from '../General/SectionTitle'
import ContactInfo from './ContactInfo'
import ContactFormInput from './ContactFormInput'
import Button from '../General/Button';
import ContactSuccess from './ContactSuccess'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const[isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    navigate("/")
    const inputsForm = document.querySelectorAll('form input,textarea')
    inputsForm.forEach(input => input.value = '')
  }

  return (
    <div className='w-full px-8' name='contact'>
       <div className="px-4 md:px-10 lg:px-36 py-8 md:mt-0 mb-8 md:mb-12 lg:mb-20 max-w-[900px] mx-auto bg-white rounded-lg">
        <SectionTitle icon={<MdContactMail size="28" />} text='Contact' />
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 px-4 sm:px-0'>
              <div className='flex flex-col items-start justify-start space-y-4'>
                  <ContactInfo icon={<MdEmail size="22" />} title="Email" text="humberto.robles.diez@gmail.com" />
                  <ContactInfo icon={<MdPhone size="22" />} title="Phone" text="+48 690 620 188" />
                  <ContactInfo icon={<FaTelegram size="22" />} title="Telegram" text="+48 690 620 188" />
                  <ContactInfo icon={<IoLogoWhatsapp size="22" />} title="Whatsapp" text="+48 690 620 188" />
              </div>
              <div className='w-full'>
                <form name="contact" action="/contact/success" method="POST" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <ContactFormInput element= 'input' labelFor="name" label="Name" type="text" name="name" placeholder="Your name" required={true} />
                  <ContactFormInput element= 'input' labelFor="email" label="Email" type="email" name="email" placeholder="Your email" required={true} />
                  <ContactFormInput element= 'input' labelFor="subjet" label="Subject" type="text" name="subject" placeholder="Subject" />
                  <ContactFormInput element= 'textarea' labelFor="message" label="Message" name="message" placeholder="Your message"
                  rows="5" required={true} />
                  <div data-netlify-recaptcha="true"></div>
                  <Button type="submit" text="Submit"/>
                </form>
                {isSubmitted && (<ContactSuccess />)}
              </div>
          </div>
       </div>
    </div>
  )
}

export default Contact