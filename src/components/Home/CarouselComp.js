import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const CarouselComp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Carousel className='carouselSize'>
        <Carousel.Item className='carouselSize carouselItem '>
          <Carousel.Caption className='carouselCaption position-absolute top-50 start-50 translate-middle text-dark'>
            <h3 className='mb-4'>Lorem ipsum dolor</h3>
            <p className='pb-3'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <Button
              variant='warning'
              onClick={() => navigate('/react-simple-web-shop/shop')}
            >
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carouselSize carouselItem'>
          <Carousel.Caption className='carouselCaption position-absolute top-50 start-50 translate-middle text-dark'>
            <h3 className='mb-4'>Lorem ipsum dolor</h3>
            <p className='pb-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              variant='warning'
              onClick={() => navigate('/react-simple-web-shop/shop')}
            >
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carouselSize carouselItem'>
          <Carousel.Caption className='carouselCaption position-absolute top-50 start-50 translate-middle text-dark'>
            <h3 className='mb-4'>Lorem ipsum dolor</h3>
            <p className='pb-3'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button
              variant='warning'
              onClick={() => navigate('/react-simple-web-shop/shop')}
            >
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
