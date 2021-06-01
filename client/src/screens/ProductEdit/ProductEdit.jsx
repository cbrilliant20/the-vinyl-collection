import { useState, useEffect } from "react"
import "./productEdit.css"
import { useParams, Redirect } from "react-router-dom"
import Layout from "../../components"
import { getProduct, updateProduct } from "../../services/products"
import deleteProduct from "../../services/products"

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    imgURL: "",
    artist: "",
    album: "",
    genre: "",
    year: "",
    price: "",
  })

  const [isEdited, setEdited] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const grabProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    grabProduct()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateProduct(id, product)
    setEdited(updated)
  }

  if (isEdited) {
    return <Redirect to={`/products/${id}`} />
  }

  return (
    <Layout>
      <div className="product-edit">
        <div className="img-container">
          <img
            className="edit-product-img"
            src={product.imgURL}
            alt={product.name}
          />
          <form>
            <input
              required
              className="edit-iput-img-link"
              placeholder="Image Link"
              value={product.imgURL}
              name="imgURL"
              onChange={handleChange}
            />
          </form>
        </div>
        <form classNAme="product-edit-form" onSubmit={handleSubmit}>
          <input
            className="input-artist"
            placeholder="Artist"
            value={product.artist}
            name="artist"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-album"
            placeholder="Album Name"
            value={product.album}
            name="album"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-genre"
            placeholder="Genre"
            value={product.genre}
            name="genre"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-year"
            placeholder="Year Released"
            value={product.year}
            name="year"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            autoFocus
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save Changes
          </button>
          <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
        </form>
      </div>
    </Layout>
  )
}

export default ProductEdit
