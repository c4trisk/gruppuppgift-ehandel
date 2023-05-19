import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
    <div className='contact-wrapper'>
    <div className='contact-card'>
    <p className='contact-headline'>Write something</p>
      <ContactForm />
    </div>
    </div>
    </div>
  )
}

export default Contact