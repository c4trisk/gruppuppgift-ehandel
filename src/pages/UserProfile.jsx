import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../store/features/auth/authSlice'

const UserProfile = () => {

  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // If user logs out using "Sign in as another user" - redirects to login
  const logoutAndNavigate = () => {
    dispatch(logOut())
    navigate('/login')
  }

  // If user logs out using logout-button in navbar while on this page - redirects to login
  useEffect(() => {
    if(!user) {
        navigate('/login')
    }
  }, [user])

  if (!user) {
    return null; // Or you can render a loading spinner or a message indicating that the user is not available
  }
  
  return (
    <div className='UserProfile'>
      <h1>Welcome back!</h1>
      <p>You are currently logged in as {user.email}</p>
      <p>Not you? <span className='link' onClick={logoutAndNavigate}>Sign in as another user here</span></p>
    </div>
  )
}

export default UserProfile