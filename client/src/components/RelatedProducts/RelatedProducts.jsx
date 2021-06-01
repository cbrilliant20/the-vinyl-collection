import { useState, useEffect } from "react"
import { getProducts } from "../../services/products"

function RelatedProducts(props) {
  const [products, setProducts] = useState ([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])



  return (
    <div className="relatedArtist-container">
      <h3>Other Artist You May Like...</h3>
      {products
        .filter((product) => product.genre === props.product.genre)
        .map((product, index) => (
           
          <h3>{product.artist}</h3>
        ))}
    
      
  </div>
)
}
export default RelatedProducts