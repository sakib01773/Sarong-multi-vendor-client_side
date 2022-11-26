import React from 'react';
import { Carousel } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
// import "./Banner.css"
import './CarouselOffer.css'
import { Link } from 'react-router-dom';


const CarouselOffer = () => {
    return (
        <div data-aos="fade-up" className='mb-5 mt-4'>

<Carousel className="banners">
  <Carousel.Item className="carousel-design values">
  <img
      className="d-block w-100  slide"
      src="https://storage.googleapis.com/monarchmart-storage/uploads/all/Q3Bkoc7GUP4sxm4DxxziSiXARk32BVBrKcl2tbn2.png"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://storage.googleapis.com/monarchmart-storage/uploads/all/nsEAS0QkcfIPtnZtHJ9CeEWROcUZ9uMtwmkaqQI3.png"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://storage.googleapis.com/monarchmart-storage/uploads/all/QedHD7eq48aIcnBtB5GkkmbxL89Je4jfUHS5Aynj.png"
      alt="Third slide"
    />

    <Carousel.Caption>
  
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default CarouselOffer;