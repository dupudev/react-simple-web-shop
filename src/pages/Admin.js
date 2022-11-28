///Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
///--------------------------------------

import { FiEdit, FiTrash } from 'react-icons/fi';

import React, { useContext, useState, useRef, useEffect } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';

const Admin = () => {
  const editTitle = useRef();

  const { products, setProducts } = useContext(ProductsContext);

  const [prodIdx, setProdIdx] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const [editMode, setEditMode] = useState({
    mode: false,
    idx: '',
  });

  useEffect(() => {
    editMode.mode && editTitle.current.focus();
  }, [editMode]);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const addProduct = (event) => {
    event.preventDefault();
    const prodIds = [];

    products.forEach((prod) => {
      prodIds.push(prod.id);
    });
    let maxId = Math.max(...prodIds);

    let newProduct = {
      id: maxId + 1,
      title: title,
      price: Number(price),
      description: description,
      image: image,
      category: category,
    };

    setProducts((prev) => [...prev, newProduct]);

    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setImage('');
  };

  const editProduct = (idx) => {
    setEditMode({
      mode: true,
      idx: idx,
    });

    setTitle(products[idx].title);
    setPrice(products[idx].price);
    setDescription(products[idx].description);
    setCategory(products[idx].category);
    setImage(products[idx].image);
  };

  const saveChanges = (event) => {
    event.preventDefault();

    setProducts((prev) => {
      prev[editMode.idx].title = title;
      prev[editMode.idx].price = price;
      prev[editMode.idx].description = description;
      prev[editMode.idx].category = category;
      prev[editMode.idx].image = image;

      return prev;
    });
    setEditMode({
      mode: false,
      idx: '',
    });
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setImage('');
  };

  const cancelEdit = () => {
    setEditMode({
      mode: false,
      idx: '',
    });
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setImage('');
  };

  const removeProduct = (idx) => {
    setModalShow(true);
    setProdIdx(idx);
  };

  const modalRemoveProduct = () => {
    setModalShow(false);
    let tempProducts = [...products];
    tempProducts.splice(prodIdx, 1);
    setProducts(tempProducts);
  };

  return (
    <div>
      {/*///Add Form */}
      {!editMode.mode ? (
        <Container className='py-5'>
          <h3 className='text-center mb-5'>Add New Product</h3>
          <Row
            lg={2}
            className='d-flex align-items-center justify-content-center'
          >
            <Col>
              <Form onSubmit={(event) => addProduct(event)}>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Title:</Form.Label>
                  <Form.Control
                    type='text'
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Price:</Form.Label>
                  <Form.Control
                    type='number'
                    required
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Category:</Form.Label>
                  <Form.Control
                    type='text'
                    required
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Description:</Form.Label>
                  <Form.Control
                    type='text'
                    required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Image:</Form.Label>
                  <Form.Control
                    type='url'
                    placeholder='e. g. https://www.someimage.com/image.jpg'
                    required
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                  />
                  <Form.Text className='text-muted'>
                    Add image from URL.
                  </Form.Text>
                </Form.Group>
                <Form.Group className='text-center mt-4'>
                  <Button variant='success' type='submit' className='w-50'>
                    Add Product
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className='py-5'>
          <h3 className='text-center mb-5'>Edi Product</h3>
          <Row
            lg={2}
            className='d-flex align-items-center justify-content-center'
          >
            <Col>
              <Form onSubmit={(event) => saveChanges(event)}>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Title:</Form.Label>
                  <Form.Control
                    ref={editTitle}
                    type='text'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Price:</Form.Label>
                  <Form.Control
                    type='number'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Category:</Form.Label>
                  <Form.Control
                    type='text'
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Description:</Form.Label>
                  <Form.Control
                    type='text'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='mb-1'>Image:</Form.Label>
                  <Form.Control
                    type='url'
                    placeholder='e. g. https://www.someimage.com/image.jpg'
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                  />
                  <Form.Text className='text-muted'>
                    Add image from URL.
                  </Form.Text>
                </Form.Group>
                <Form.Group className='text-center mt-4'>
                  <Button variant='success' type='submit'>
                    Save Changes
                  </Button>
                  <Button
                    variant='danger'
                    className=' ms-3'
                    onClick={cancelEdit}
                  >
                    Cancel
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      )}

      <Container className='py-5'>
        <h3 className='text-center mb-5'>All Products</h3>
        {products.map((item, idx) => {
          return (
            <Row key={item.id} className='border-bottom border-2 py-4'>
              <Col
                xs={4}
                sm={3}
                lg={2}
                className='d-flex align-items-center justify-content-start justify-content-xl-center'
              >
                <Link to={`/react-simple-web-shop/product/${item.id}`}>
                  <img src={`${item.image}`} alt='' style={{ width: '75px' }} />
                </Link>
              </Col>
              <Col
                xs={6}
                sm={7}
                lg={9}
                className='d-flex flex-column align-items-start justify-content-center'
              >
                <Link
                  style={{ color: 'black' }}
                  to={`/react-simple-web-shop/product/${item.id}`}
                >
                  <h5>{item.title}</h5>
                </Link>
                <p className='my-1'>
                  ID: <span className='fw-bold'>{item.id}</span>
                </p>
                <p className='my-1'>
                  Price: <span className='fw-bold'>${item.price}</span>
                </p>
              </Col>
              <Col
                xs={2}
                md={2}
                lg={1}
                className='d-flex flex-column align-items-end align-items-xl-center justify-content-center gap-2'
              >
                <Button
                  variant='warning'
                  className='rounded-5'
                  onClick={() => editProduct(idx)}
                >
                  <FiEdit className='fs-5 my-1'></FiEdit>
                </Button>
                <Button
                  variant='danger'
                  className='rounded-5'
                  onClick={() => removeProduct(idx)}
                >
                  <FiTrash className='fs-5 my-1'></FiTrash>
                </Button>
              </Col>
            </Row>
          );
        })}
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size='sm'
          centered
          animation={false}
        >
          <Modal.Body className='text-center py-4'>
            <Button
              variant='danger'
              onClick={() => modalRemoveProduct()}
              className=''
            >
              Remove
            </Button>
            <Button
              variant='secondary'
              onClick={() => setModalShow(false)}
              className='ms-3'
            >
              Cancel
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Admin;
