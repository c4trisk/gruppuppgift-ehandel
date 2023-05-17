import React from 'react'
import FormInput from './FormInput'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <form noValidate>
    <FormInput
    id="email"
    type="email"
    label="email"/>
    <FormInput
    id="password"
    type="password"
    label="password"/>
    <input type="checkbox" id='checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">please keep me logged in</label>
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default Form