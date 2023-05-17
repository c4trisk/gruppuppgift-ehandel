import React from 'react'
import { Link } from 'react-router-dom'

const FormInput = ({ label, ...rest}) => {
  return (
    <div className="form-group">
    <label className='form-label reg-label' htmlFor={rest.id}>{ label }*</label>
    <input className='form-control reg-control' {...rest}/>
    <p className='error'>error message</p>
    </div>
  )
}

export default FormInput