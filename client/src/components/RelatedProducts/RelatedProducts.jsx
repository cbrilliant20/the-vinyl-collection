import { useState, useEffect } from "react"
import { getProducts } from "../../services/products"
import "./RelatedProducts.css"

function RelatedProducts(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

  return (
    <div className="related-container">
      <h3>Artists You May Like</h3>
      {products
        .filter((product) => product.genre === props.product.genre)
        .map((product, index) => (
          <h4>{product.artist}</h4>
        ))}
    </div>
  )
}
export default RelatedProducts
