import React from 'react'
import FormInput from './FormInput'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <form noValidate>
    <FormInput
    id="email"
    type="email"
    label="Email*"/>
    <FormInput
    id="password"
    type="password"
    label="Password*"/>
    <p className='password-link'><Link to="/registration">Forgot your password?</Link></p>
    <div className="checkbox-login">
    <input type="checkbox" id='checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">please keep me logged in</label>
    </div>
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default LoginForm