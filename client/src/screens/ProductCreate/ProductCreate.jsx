import { useState } from "react"
import { Redirect } from "react-router-dom"
import { Layout } from "../../components/Layout/Layout"
import { createProduct } from "../../services/products"

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    artist: "",
    album: "",
    genre: "",
    year: "",
    price: "",
    imgURL: "",
  })
  const [isCreated, setCreated] = useState(false)
  const handleChange = (event) => {
    const { artist, value } = event.target
    setProduct({
      ...product,
      [artist]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }
  if (isCreated) {
    return <Redirect to={`/products`} />
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
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
          placeholder="Album"
          value={product.album}
          name="album"
          required
          onChange={handleChange}
        />
        <input
          className="input-genre"
          placeholder="Genre"
          value={product.genre}
          name="genre"
          required
          onChange={handleChange}
        />
        <input
          className="input-year"
          placeholder="Year"
          value={product.year}
          name="year"
          required
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={product.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  )
}
export default ProductCreate
