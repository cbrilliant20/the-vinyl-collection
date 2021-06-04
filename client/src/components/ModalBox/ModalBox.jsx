import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { getProducts } from "../../services/products"

function ModalBox(props) {

  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

return (
  <div>
  <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Related Artist
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Other Artist You May Like ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {products
        .filter((product) => product.genre === props.product.genre)
        .map((product, index) => (
          <h4>{product.artist}</h4>
        ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  
  </div>
)
}
export default ModalBox;

