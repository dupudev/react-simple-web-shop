///Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
///-----------------------------

import React, { useContext } from 'react';
import CartContext from '../../contexts/CartContext';

const ModalCartRemove = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const modalRemoveItem = () => {
    let tempCart = [...cart];
    tempCart.splice(props.itemIdx, 1);
    setCart(tempCart);
    props.onHide();
  };

  return (
    <Modal {...props} size='sm' centered animation={false}>
      <Modal.Body className='text-center py-4'>
        <Button variant='danger' onClick={() => modalRemoveItem()} className=''>
          Remove
        </Button>
        <Button variant='secondary' onClick={props.onHide} className='ms-3'>
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCartRemove;
