import React from 'react'

const FormInput = () => {
  return (
    <div className="form-group">
    <label className='form-label' htmlFor="email">Email*</label>
    <input type="text" className='form-control' id='email' />
    <p className='error'>error message</p>
    </div>
  )
}

export default FormInput