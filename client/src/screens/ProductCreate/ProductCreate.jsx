import { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { createProduct } from "../../services/products";
import "./ProductCreate.css";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    artist: "",
    album: "",
    tracks: "",
    genre: "",
    year: "",
    price: "",
    imgURL: "",
  });
  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };
  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-artist"
          placeholder="Artist"
          value={product.artist}
          type="text"
          name="artist"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-album"
          placeholder="Album"
          type="text"
          value={product.album}
          name="album"
          required
          onChange={handleChange}
        />
        <input
          className="input-tracks"
          placeholder="Tracks"
          type="text"
          value={product.tracks}
          name="tracks"
          required
          onChange={handleChange}
        />
        <input
          className="input-genre"
          placeholder="Genre"
          type="text"
          value={product.genre}
          name="genre"
          required
          onChange={handleChange}
        />
        <input
          className="input-year"
          placeholder="Year"
          type="text"
          value={product.year}
          name="year"
          required
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Price"
          type="text"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          type="text"
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
  );
};
export default ProductCreate;
