import { useState, useEffect } from "react"
import "./ProductCards.css"
import ProductCard from "../ProductCard/ProductCard"
import Product from "../Product/Product"
import { getProducts } from "../../services/products"

const ProductCards = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      console.log(allProducts)
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

  const cards = products.map((product, index) => (
    <Product
      _id={product._id}
      artist={product.artist}
      album={product.album}
      genre={product.genre}
      imgURL={product.imgURL}
      key={index}
    />
  ))

  return (
    <div className="product-cards">
      <div className="cards">{cards}</div>
    </div>
  )
}

export default ProductCards
