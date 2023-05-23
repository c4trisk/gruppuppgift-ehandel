import React, { useState } from 'react'
import FormInput from './FormInput'
import { useDispatch } from 'react-redux'
import { registerUser } from '../store/features/auth/authSlice'

const RegForm = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    postalcode: '',
    city: '',
    mobile: '',
    company: '',
    email: '',
    password: '',
    confirmPswrd: '',
    profileImg: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(registerUser(formData))

  }

  return (
    <form noValidate onSubmit={handleSubmit}>
    <FormInput
    id="firstName"
    type="text"
    label="First Name*"
    value={formData.firstName}
    onChange={handleChange}/>
    <FormInput
    id="lastName"
    type="text"
    label="Last Name*"
    value={formData.lastName}
    onChange={handleChange}/>
    <FormInput
    id="street"
    type="text"
    label="Street Name*"
    value={formData.street}
    onChange={handleChange}/>
    <FormInput
    id="postalcode"
    type="number"
    label="Postal Code*"
    value={formData.postalcode}
    onChange={handleChange}/>
    <FormInput
    id="city"
    type="text"
    label="City*"
    value={formData.city}
    onChange={handleChange}/>
    <FormInput
    id="mobile"
    type="number"
    label="Mobile (optional)"
    value={formData.mobile}
    onChange={handleChange}/>
    <FormInput
    id="company"
    type="text"
    label="Company (optional)"
    value={formData.company}
    onChange={handleChange}/>
    <FormInput
    id="email"
    type="email"
    label="Email*"
    value={formData.email}
    onChange={handleChange}/>
    <FormInput
    id="password"
    type="password"
    label="Password*"
    value={formData.password}
    onChange={handleChange}/>
    <FormInput
    id="confirmPswrd"
    type="password"
    label="Confirm Password*"
    value={formData.confirmPswrd}
    onChange={handleChange}/>
    <FormInput
    id="profileImg"
    type="text"
    label="Upload Profile Image (optional)"
    value={formData.profileImg}
    onChange={handleChange}/>
    <input type="checkbox" id='reg-checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">i have read and accept terms and agreements</label>
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default RegForm