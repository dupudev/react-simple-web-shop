import React, { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import Products from '../components/Shop/Products';

const Shop = () => {
  const { loading } = useContext(ProductsContext);

  return (
    <div>
      {loading ? (
        <h3 className='text-center mt-5'>Loading...</h3>
      ) : (
        <Products />
      )}
    </div>
  );
};

export default Shop;
