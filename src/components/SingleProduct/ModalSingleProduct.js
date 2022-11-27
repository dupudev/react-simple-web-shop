///Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
///-----------------------------

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModalSingleProduct = (props) => {
  const navigate = useNavigate();

  return (
    <Modal
      {...props}
      size='md'
      centered
      animation={false}
    >
      <Modal.Body className='text-center py-4'>
        <Button variant='primary' onClick={() => navigate('/shop')}>
          Back to store
        </Button>
        <Button variant='secondary' onClick={props.onHide} className='ms-3'>
          Keep shopping
        </Button>
        <Button
          variant='success'
          onClick={() => navigate('/cart')}
          className='ms-3'
        >
          Go to Cart
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSingleProduct;
