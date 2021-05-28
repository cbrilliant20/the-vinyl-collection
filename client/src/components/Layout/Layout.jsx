import "./Layout.css"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const Layout = (props) => {
  return (
    <div className="layout">
      <Nav user={props.user} className="layout-nav" />
      <div className="layout-children">{props.children}</div>
      <Footer className="layout-foot" />
    </div>
  )
}

export default Layout
