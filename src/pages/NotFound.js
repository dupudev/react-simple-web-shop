import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className='text-center py-5'>
      <h4>
        Error 404 <br />
        Page not found!
      </h4>
      <br />
      <Button
        variant='success'
        onClick={() => navigate('/react-simple-web-shop/')}
      >
        Back to Home page
      </Button>
    </Container>
  );
};

export default NotFound;
