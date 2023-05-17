import React from 'react'
import FormInput from './FormInput'

const RegForm = () => {
  return (
    <form noValidate>
    <FormInput
    id="firstName"
    type="text"
    label="First Name*"/>
    <FormInput
    id="lastName"
    type="text"
    label="Last Name*"/>
    <FormInput
    id="street"
    type="text"
    label="Street Name*"/>
    <FormInput
    id="postalcode"
    type="number"
    label="Postal Code*"/>
    <FormInput
    id="city"
    type="text"
    label="City*"/>
    <FormInput
    id="mobile"
    type="number"
    label="Mobile (optional)"/>
    <FormInput
    id="company"
    type="text"
    label="Company (optional)"/>
    <FormInput
    id="email"
    type="email"
    label="Email*"/>
    <FormInput
    id="password"
    type="password"
    label="Password*"/>
    <FormInput
    id="confirm-pswrd"
    type="password"
    label="Confirm Password*"/>
    <FormInput
    id="profile-img"
    type="text"
    label="Upload Profile Image (optional)"/>
    <input type="checkbox" id='reg-checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">i have read and accept terms and agreements</label>
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default RegForm