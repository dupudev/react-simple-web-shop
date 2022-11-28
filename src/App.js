import './App.css';
import Navmenu from './components/Navmenu';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? '');

  return (
    <div className='App'>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Navmenu token={token} setToken={setToken} />
            <Routes>
              <Route path='react-simple-web-shop/' element={<Home />} />
              <Route path='react-simple-web-shop/shop' element={<Shop />} />
              <Route
                path='react-simple-web-shop/product/:id'
                element={<SingleProduct />}
              />
              <Route path='react-simple-web-shop/about' element={<About />} />
              <Route path='react-simple-web-shop/cart' element={<Cart />} />
              {token ? (
                <Route path='react-simple-web-shop/admin' element={<Admin />} />
              ) : (
                <Route
                  path='react-simple-web-shop/login'
                  element={<LogIn token={token} setToken={setToken} />}
                />
              )}

              <Route path='react-simple-web-shop/*' element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
};

export default App;
