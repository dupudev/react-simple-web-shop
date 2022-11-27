import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center bg-success text-white py-4 mt-auto'>
      &copy; {new Date().getFullYear()}. Fake Store
    </footer>
  );
};

export default Footer;
