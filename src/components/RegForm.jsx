import React from 'react'
import FormInput from './FormInput'

const RegForm = () => {
  return (
    <form noValidate>
    <FormInput
    id="firstName"
    type="text"
    label="First Name"/>
    <FormInput
    id="lastName"
    type="text"
    label="Last Name"/>
    <FormInput
    id="street"
    type="text"
    label="Street Name"/>
    <FormInput
    id="postalcode"
    type="number"
    label="Postal Code"/>
    <FormInput
    id="city"
    type="text"
    label="City"/>
    <FormInput
    id="mobile"
    type="number"
    label="Mobile"/>
    <FormInput
    id="company"
    type="text"
    label="Company"/>
    <FormInput
    id="email"
    type="email"
    label="email adress"/>
    <FormInput
    id="password"
    type="password"
    label="password"/>
    <FormInput
    id="confirm-pswrd"
    type="password"
    label="confirm-pswrd"/>
    <FormInput
    id="profile-img"
    type="text"
    label="Profile-img"/>
    <input type="checkbox" id='reg-checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">i have read and accept terms and agreements</label>
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default RegForm