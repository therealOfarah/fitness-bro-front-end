import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <div id='signupform'>
      <h1> Sign Up Now</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder='Name'
          />
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder='Email'
          />
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder='Password'
          />
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            placeholder='Confirm Password'
          />
          <button id='signupbtn' disabled={isFormInvalid()} className={styles.button}>
            Sign Up
          </button>
          <Link to="/">
            <button id='signupbtn' className={styles.cancel}>Cancel</button>
          </Link>
          <hr />
          <p>Do you have an account ? <Link to="/login">Sign in</Link></p>
      </form>
    </div>
  )
}

export default SignupForm
