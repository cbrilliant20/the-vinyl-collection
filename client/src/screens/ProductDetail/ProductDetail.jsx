import "./ProductDetail.css";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link } from "react-router-dom";
import ModalBox from "../../components/ModalBox/ModalBox";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading In Progress...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="parallax">
        <div className="product-detail">
          <img
            className="product-detail-image"
            src={product.imgURL}
            alt={product.album}
          />

          <div className="detail">
            <div className="artist">{product.artist}</div>
            <div className="album">{product.album}</div>
            <div className="songs">
              {" "}
              <u>
                <b>
                  <em>Songs: </em>
                </b>
              </u>
            </div>
            <div className="tracks">{product.tracks}</div>
            <div className="genre">Genre : {product.genre}</div>
            <div className="year">Year Released : {product.year}</div>
            <div className="price">Price : {`$${product.price}`}</div>
            <ModalBox product={product} />
            <Link className="edit-button" to={`/products/${product._id}/edit`}>
              <button className="edit-btn">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
