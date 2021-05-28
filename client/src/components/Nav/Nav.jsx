import "./Nav"
import { NavLink } from "react-router-dom"

const authenticatedOptions = (
  <div>
    <NavLink className="link" to="/add-product">
      Add Record
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </div>
)

const unauthenticatedOptions = (
  <div>
    <NavLink className="link" to="sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="sign-in">
      Sign In
    </NavLink>
  </div>
)

const alwaysOptions = (
  <div>
    <NavLink className="link" to="/products">
      Records
    </NavLink>
  </div>
)

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          T.V.E.
        </NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
