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
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? '');

  return (
    <div className='App'>
      <ProductsProvider>
        <CartProvider>
          <HashRouter>
            <Navmenu token={token} setToken={setToken} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='shop' element={<Shop />} />
              <Route
                path='product/:id'
                element={<SingleProduct />}
              />
              <Route path='about' element={<About />} />
              <Route path='cart' element={<Cart />} />
              {token ? (
                <Route path='admin' element={<Admin />} />
              ) : (
                <Route
                  path='login'
                  element={<LogIn token={token} setToken={setToken} />}
                />
              )}

              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </HashRouter>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
};

export default App;
