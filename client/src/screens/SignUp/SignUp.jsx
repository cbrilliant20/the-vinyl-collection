import { useState } from "react"
import "./SignUp.css"
import { signUp } from "../../services/users"
import { useHistory } from "react-router-dom"
import Layout from "../../components/Layout/Layout"

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
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
      history.push("/products")
    } catch (error) {
      console.error(error)
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Invalid Credentials",
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : ""
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <Layout>
      <div className="sign-up-form-container">
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp}>
          <label></label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <label></label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <label></label>
          <input
            required
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <label></label>
          <input
            required
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  )
}

export default SignUp
