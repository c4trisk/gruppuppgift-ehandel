import React from 'react'

const ContactForm = () => {
  return (
    <div className="form-group">
    <label className='form-label reg-label' htmlFor={rest.id}>{ label }</label>
    <input className='form-control reg-control' {...rest}/>
    <textarea name="" id="textarea" cols="30" rows="10"></textarea>
    <p className='error'>error message</p>
    </div>
  )
}

export default ContactForm