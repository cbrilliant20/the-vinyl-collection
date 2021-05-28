import "./ProductCard.css"
import { Link } from "react-router-dom"

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img className="product-card-image" src={props.imgURL} />
      <p className="product-card-artist">{props.artist}</p>
      <div className="product-card-album">{props.album}</div>
      <div className="product-card-genre">{props.genre}</div>
    </div>
  )
}

export default ProductCard
