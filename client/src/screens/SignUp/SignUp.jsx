import { useState } from "react"
import '.SignUp.css'
import { signUp } from "../../services/users"
import { useHistory } from "react-router-dom"

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  
  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: "Invalid Credentials",
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger'
      : ''
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else { 
    return <button type='submit'>Sign Up</button >
  }
}
  
  const { username, email, password,
    passwordConfirmation } = form
  

  return (
    <div className='sign-up-form-container'>
      <h3>Sign Up</h3>
      <form onSubmit={onSinUp}>
        <label>
          Username
        </label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Username'
          onChange={handleChange}
        />
        <label>
          Email Address 
        </label>
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
        />
        <label>
          Password
        </label>
        <input
          required
          type='password'
          name='password'
          value={password}
          placeholder='Password'
          onChange={handleChange}
        />
        <label>
          Password Confirmation
        </label>
        <input
          required
          type='password'
          name='passwordConfirmation'
          value={passwordConfirmation}
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>

    </div>
  )
}

export default SignUp