import "./Home.css"
import Layout from "../../components/Layout/Layout"
import ProductCards from "../../components/ProductCards/ProductCards"
import { Link } from "react-router-dom"
const Home = (props) => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>The Vinyl Exchange</h1>
        <h2>
          Join the leading social marketplace for new and second hand records.{" "}
        </h2>
        <h3>
          As the largest vinyl exchange on the web, we make it easy to find the
          albums you love and uncover some hidden classics.{" "}
        </h3>
        <div className="home-buttons">
          <Link to="/products">
            <button>Press Play</button>
          </Link>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
