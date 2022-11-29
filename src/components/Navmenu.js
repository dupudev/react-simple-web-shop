import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

///Bootstrap
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartContext from '../contexts/CartContext';

const Navmenu = ({ token, setToken }) => {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const logOutHandler = () => {
    setToken('');
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <div>
      <Navbar bg='success' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/' href='/'>
            Fake Store
          </Navbar.Brand>
          <NavbarToggle />
          <NavbarCollapse className='text-center'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/' href='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/shop' href='shop'>
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to='/about' href='/about' className='me-md-5'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/cart' href='/cart' className='ms-md-5'>
                Cart({cart.length})
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link as={Link} to='/admin' href='/admin'>
                    Admin
                  </Nav.Link>
                  <Nav.Link onClick={logOutHandler}>Log Out</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to='/login' href='/login' className=''>
                  Log In
                </Nav.Link>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navmenu;
