import { useEffect } from "react"
import { signOut } from "../../services/users"
import { useHistory } from "react-router-dom"
import "./SignOut.css"

const SignOut = (props) => {
  const { setUser } = props
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push("/products")
    }
    signOutUser()
  }, [history, setUser])

  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default SignOut
