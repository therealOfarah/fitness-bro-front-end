import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { email, pw } = formData

  const isFormInvalid = () => {
    return !(email && pw)
  }

  return (
    <form
      id='signinform'
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <h1> Log In </h1>
      <label htmlFor="email" className={styles.label}>Email</label>
      <input
        type="text"
        autoComplete="off"
        id="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
        placeholder='Email'
      />
      <label htmlFor="password" className={styles.label}>Password</label>
      <input
        type="password"
        autoComplete="off"
        id="password"
        value={formData.pw}
        name="pw"
        onChange={handleChange}
        placeholder='Password'
      />
      <button id='signinbtn' disabled={isFormInvalid()} className={styles.button}>Log In</button>
      <Link to="/">
        <button id='signinbtn'>Cancel</button>
      </Link>
      <hr />
      <p>Don't have an account ? <Link to="/signup">Sign up</Link></p>
    </form>
  )
}

export default LoginForm
