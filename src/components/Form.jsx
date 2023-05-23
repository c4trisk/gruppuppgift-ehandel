// import React from 'react'
// import FormInput from './FormInput'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { loginUser } from '../store/features/auth/authSlice'
// // import { Link } from 'react-router-dom'

// const Form = () => {

//   const dispatch = useDispatch()

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })

//   const handleChange = e => {
//     const { id, value } = e.target
//     setFormData(form => {
//       return {
//         ...form,
//         [id]: value
//       }
//     })
//   }

//   const handleSubmit = e => {
//     e.preventDefault()

//     dispatch(loginUser(formData))
//   }


//   return (
//     <form noValidate onSubmit={handleSubmit}>
//     <FormInput
//     id="email"
//     type="email"
//     label="Email*"
//     value={formData.email}
//     onChange={handleChange}/>
//     <FormInput
//     id="password"
//     type="password"
//     label="Password*"
//     value={formData.password}
//     onChange={handleChange}/>
//     <div className="checkbox-login">
//     <input type="checkbox" id='checkbox'/> 
//     <label className='checkbox-label' htmlFor="checkbox">please keep me logged in</label>
//     </div>
//     <button className='login-btn'>Submit</button>
//     </form>
//   )
// }

//  export default Form