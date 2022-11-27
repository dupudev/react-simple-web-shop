///Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
///--------------------------------------

import React, { useContext, useEffect, useState } from 'react';
import ProductsContext from '../../contexts/ProductsContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const { products } = useContext(ProductsContext);
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const tempAllCategs = [];
    products.forEach((prod) => {
      if (!tempAllCategs.some((categ) => categ === prod.category)) {
        tempAllCategs.push(prod.category);
      }
    });
    setAllCategories(tempAllCategs);
  }, [products]);

  const regex = new RegExp(search, 'gi');

  const filteredProducts = products.filter((prod) => {
    if (category === '' && prod.title.match(regex)) {
      return prod;
    } else if (prod.category === category && prod.title.match(regex)) {
      return prod;
    }
  });

  return (
    <Container className='my-5'>
      <Row className='mb-5 px-md-5'>
        <Col xs={10} sm={10} md={8} lg={4} className='mx-auto mb-4'>
          <Form>
            <Form.Group>
              <Form.Control
                className='border-success'
                type='text'
                placeholder='Search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={{ span: 7, offset: 1 }}
          className='text-center text-lg-start'
        >
          <Button
            variant={category === '' ? 'success' : 'outline-success'}
            className='mb-2'
            onClick={() => setCategory('')}
          >
            All
          </Button>
          {allCategories.map((cat, idx) => {
            return (
              <Button
                key={idx}
                style={{ textTransform: 'capitalize' }}
                variant={category === cat ? 'success' : 'outline-success'}
                className='ms-2 mb-2'
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            );
          })}
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} xxl={4}>
        {filteredProducts.map((product, idx) => {
          return (
            <Col key={product.id}>
              <Card
                style={{
                  maxWidth: '25rem',
                  // minWidth: '20rem',
                }}
                className='mx-auto mb-4 align-items-center'
              >
                <Card.Img variant='top' src={product.image} className='p-3' />
                <Card.Body className='d-flex flex-column align-self-start justify-content-between w-100'>
                  <div>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle className='mb-4 mt-3 text-muted'>
                      {product.category}
                    </Card.Subtitle>
                  </div>
                  <div className='price d-flex justify-content-between '>
                    <p className='h3 mb-0'>${product.price}</p>
                    <Button
                      variant='success'
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
