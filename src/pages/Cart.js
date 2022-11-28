///Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
///--------------------------------------

import { FiTrash } from 'react-icons/fi';

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import ModalCartRemove from '../components/Cart/ModalCartRemove';

const Cart = () => {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);

  const [modalShow, setModalShow] = useState(false);
  const [itemIdx, setItemIdx] = useState(null);

  let total = cart.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  const removeItem = (idx) => {
    setModalShow(true);
    setItemIdx(idx);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Container fluid='md' className='py-5'>
      {cart.length > 0 ? (
        <>
          {cart.map((item, idx) => {
            return (
              <Row key={item.id} className='border-bottom border-2 py-4'>
                <Col
                  xs={4}
                  sm={3}
                  lg={2}
                  className='d-flex align-items-center justify-content-start justify-content-xl-center'
                >
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={`${item.image}`}
                      alt=''
                      style={{ width: '100px' }}
                    />
                  </Link>
                </Col>
                <Col
                  xs={6}
                  sm={7}
                  lg={9}
                  className='d-flex flex-column align-items-start justify-content-start'
                >
                  <Link style={{ color: 'black' }} to={`/product/${item.id}`}>
                    <h5>{item.title}</h5>
                  </Link>
                  <p className='my-1'>
                    Unit price: <span className='fw-bold'>${item.price}</span>
                  </p>
                  <p className='my-1'>
                    Quantity: <span className='fw-bold'>{item.qty}</span>
                  </p>
                  <p className='my-1'>
                    Price:&nbsp;
                    <span className='fw-bold'>
                      ${Number((item.qty * item.price).toFixed(2))}
                    </span>
                  </p>
                </Col>
                <Col
                  xs={2}
                  md={2}
                  lg={1}
                  className='d-flex align-items-center justify-content-end justify-content-xl-center'
                >
                  <Button
                    variant='danger'
                    className='rounded-5'
                    onClick={() => removeItem(idx)}
                  >
                    <FiTrash className='fs-5 my-1'></FiTrash>
                  </Button>
                </Col>
              </Row>
            );
          })}
          <ModalCartRemove
            show={modalShow}
            itemIdx={itemIdx}
            onHide={() => setModalShow(false)}
          />
          <div className='d-flex align-items-center justify-content-end py-4'>
            Total:&nbsp;
            <span className='fw-bold'>${Number(total.toFixed(2))}</span>
            <Button variant='warning' className='ms-4' onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      ) : (
        <div className='text-center'>
          <h3 className='mb-4'>Cart is empty!</h3>
          <Button variant='success' onClick={() => navigate('/shop')}>
            Return to Shop
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Cart;
