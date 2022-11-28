///Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
///--------------------------------------

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';
import CartContext from '../contexts/CartContext';
import ModalSingleProduct from '../components/SingleProduct/ModalSingleProduct';

const SingleProduct = () => {
  const params = useParams();

  const { products } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);

  const [qty, setQty] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const product = products.filter((item) => {
    if (item.id == params.id) {
      return item;
    }
  })[0];

  const increment = () => {
    setQty((prev) => prev + 1);
  };
  const decrement = () => {
    setQty((prev) => (prev <= 1 ? prev : prev - 1));
  };

  const addToCart = (event) => {
    event.preventDefault();

    let tempIdx;
    let tempItem = cart.filter((prod, idx) => {
      if (prod.id === product.id) {
        tempIdx = idx;
        return prod;
      }
    });

    if (tempItem.length > 0) {
      setCart((prevCart) => {
        prevCart[tempIdx].qty += qty;
        return prevCart;
      });
    } else {
      let item = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        qty: qty,
      };

      setCart((prev) => [...prev, item]);
    }
  };

  return (
    <Container className='py-5'>
      <Row className='item d-flex justify-content-center mt-5'>
        <Col
          xs={10}
          sm={10}
          md={8}
          lg={5}
          xl={4}
          className='d-flex align-items-center justify-content-center border border-success mb-4 mb-lg-0 me-lg-4'
        >
          <div className='image p-3'>
            <img src={product.image} alt='' className='img-fluid' />
          </div>
        </Col>
        <Col
          xs={10}
          sm={10}
          md={8}
          lg={5}
          xl={5}
          className='d-flex flex-column justify-content-between'
        >
          <div className='mt-2'>
            <h3>{product.title}</h3>
            <p className='h2 my-3'>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
          </div>
          <div className='mb-2'>
            <p>Quantity:</p>

            <Form
              onSubmit={(event) => addToCart(event)}
              className='d-flex flex-row align-items-center'
            >
              <Button variant='outline-dark' onClick={decrement}>
                -
              </Button>
              <Form.Group className='qty mx-2'>
                <Form.Control
                  className='text-center'
                  type='number'
                  value={qty}
                  readOnly
                  onChange={(event) => setQty(Number(event.target.value))}
                />
              </Form.Group>
              <Button variant='outline-dark' onClick={increment}>
                +
              </Button>
              <Button
                type='submit'
                variant='success'
                className='ms-4'
                onClick={() => setModalShow(true)}
              >
                Add to Cart
              </Button>

              <ModalSingleProduct
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
