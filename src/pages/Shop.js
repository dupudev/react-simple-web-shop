import Spinner from 'react-bootstrap/Spinner';

import React, { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import Products from '../components/Shop/Products';

const Shop = () => {
  const { loading } = useContext(ProductsContext);

  return (
    <div>
      {loading ? (
        <Spinner
          animation='border'
          variant='success'
          className='d-flex mx-auto mt-5'
        />
      ) : (
        <Products />
      )}
    </div>
  );
};

export default Shop;
