///Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
///--------------------------------------

import { BiSupport } from 'react-icons/bi';
import {
  RiSecurePaymentFill,
  RiRefund2Fill,
  RiTruckLine,
} from 'react-icons/ri';

import React from 'react';
import CarouselComp from '../components/Home/CarouselComp';

const Home = () => {
  return (
    <div>
      <CarouselComp />
      <Container className='my-5'>
        <Row className='text-center mb-5'>
          <h2>Fake Store</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            eos facilis. Ab iste officiis ea.
          </p>
        </Row>
        <Row
          xs={1}
          md={2}
          lg={3}
          xxl={4}
          className='mb-5 justify-content-center'
        >
          <Col>
            <Card
              style={{ maxWidth: '330px', height: 'auto' }}
              className='offer mb-4 mx-auto'
            >
              <Card.Body className='text-center py-4'>
                <RiRefund2Fill className='display-4 mb-3 text-success' />
                <Card.Title>
                  <h4>Money back guarantee</h4>
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ maxWidth: '330px', height: 'auto' }}
              className='offer mb-4 mx-auto'
            >
              <Card.Body className='text-center py-4'>
                <RiTruckLine className='display-4 mb-3 text-success' />
                <Card.Title>
                  <h4>Free delivery</h4>
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ maxWidth: '330px', height: 'auto' }}
              className='offer mb-4 mx-auto'
            >
              <Card.Body className='text-center py-4'>
                <BiSupport className='display-4 mb-3 text-success' />
                <Card.Title>
                  <h4>Always support</h4>
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ maxWidth: '330px', height: 'auto' }}
              className='offer mb-4 mx-auto'
            >
              <Card.Body className='text-center py-4'>
                <RiSecurePaymentFill className='display-4 mb-3 text-success' />
                <Card.Title>
                  <h4>Secure payment</h4>
                </Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
