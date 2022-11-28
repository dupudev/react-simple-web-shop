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
    navigate('react-simple-web-shop/');
  };

  return (
    <div>
      <Navbar bg='success' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/react-simple-web-shop' href='/'>
            Fake Store
          </Navbar.Brand>
          <NavbarToggle />
          <NavbarCollapse className='text-center'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/react-simple-web-shop' href='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='react-simple-web-shop/shop' href='shop'>
                Shop
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='react-simple-web-shop/about'
                href='react-simple-web-shop/about'
                className='me-md-5'
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='react-simple-web-shop/cart'
                href='react-simple-web-shop/cart'
                className='ms-md-5'
              >
                Cart({cart.length})
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link
                    as={Link}
                    to='react-simple-web-shop/admin'
                    href='react-simple-web-shop/admin'
                  >
                    Admin
                  </Nav.Link>
                  <Nav.Link
                    href='/react-simple-web-shop'
                    onClick={logOutHandler}
                  >
                    Log Out
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  to='react-simple-web-shop/login'
                  href='react-simple-web-shop/login'
                  className=''
                >
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
