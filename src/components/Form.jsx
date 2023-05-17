import React from 'react'
import FormInput from './FormInput'

const Form = () => {
  return (
    <form noValidate>
    <FormInput id="email"
    type="email"
    label="email"/>
    <input type="checkbox" id='checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">please keep me logged in</label>
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default Form