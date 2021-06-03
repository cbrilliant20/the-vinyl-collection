import "./Nav.css"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons"

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Record
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className="link" to="/products">
      Records
    </NavLink>
  </>
)

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/products">
          <FontAwesomeIcon className="icon" icon={faCompactDisc} />
          <p>T.V.E.</p>
        </NavLink>
        <div className="links">
          {user && (
            <p className="link-welcome">
              <span className="welcome"> Welcome, </span>&nbsp;
              <span className="username">{user.username} </span>
            </p>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
