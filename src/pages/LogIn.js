///Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
///--------------------------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = ({ token, setToken }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const loginHandler = () => {
    setError('');
    setLoggingIn(true);

    axios({
      url: 'https://fakestoreapi.com/auth/login',
      method: 'POST',
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        setToken(res.data.token);
        localStorage.setItem('userToken', res.data.token);
        navigate('/admin');
        setLoggingIn(false);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
        setLoggingIn(false);
      });
  };

  return (
    <Container className='py-5'>
      <h3 className='text-center mb-5'>Log In</h3>
      <Row className='d-flex align-items-center justify-content-center '>
        <Col sm={7} md={5} lg={4} xl={3}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1'>
                Username: <strong>mor_2314</strong>{' '}
              </Form.Label>
              <Form.Control
                type='text'
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1'>
                Password: <strong>83r5^_</strong>{' '}
              </Form.Label>
              <Form.Control
                type='password'
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>

            <Form.Group className='text-center mt-4'>
              <Button variant='success' className='w-50' onClick={loginHandler}>
                Log In
              </Button>

              {loggingIn && (
                <Spinner
                  animation='border'
                  variant='success'
                  className='d-flex mx-auto mt-4'
                />
              )}
              {error && (
                <Form.Text className='text-danger d-block mt-3'>
                  {error.charAt(0).toUpperCase() + error.slice(1)}!
                </Form.Text>
              )}
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
