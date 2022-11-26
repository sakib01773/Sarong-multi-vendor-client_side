import React from 'react';
import { Carousel } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
import "./Banner.css"
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>

<Carousel className="banners">
  <Carousel.Item className="carousel-design valuesPicture">
  <img
      className="d-block w-100 slide"
      src="https://i.ibb.co/L6CBjjc/number1-saree.png"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design valuesPicture">
    <img
      className="d-block w-100 slide"
      src="https://i.ibb.co/L6CBjjc/number1-saree.png"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design valuesPicture">
    <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/L6CBjjc/number1-saree.png"
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

export default Banner;