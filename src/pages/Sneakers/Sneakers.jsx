import React, { useState } from 'react';
import './Sneakers.css';
export default function Sneakers(props) {
 
  const [noOfBuying, setNoOfBuying] = useState(0);
   const product= {
    name: 'Fall Limited Edition Sneakers',
    cost: '$125',
     noOfBuying: noOfBuying,
    id:1
    
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);
   const decrement = () => {
    setNoOfBuying(noOfBuying >= 1 ? noOfBuying - 1 : 0);
  };

  const increment = () => {
    setNoOfBuying(noOfBuying + 1);
  };

const addHandle=()=>{props.addToCart(product)}
  const images = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
  ];

 
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const openCarousel = () => {
    setCarouselVisible(true);
  };

  const closeCarousel = () => {
    setCarouselVisible(false);
  };

  const changeImage = (direction) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className='sneaker-container'>
      <div className='left-sneaker'>
        <div  className='toggle'>
          <img
          className='bigImage'
          src={images[currentImageIndex]}
          alt="Main Sneaker"
          onClick={openCarousel}
        />

        <div className='threeImages'>
          {images.map((src, index) => (
            <img
              key={index}
              className='smallImage'
              src={src.replace('.jpg', '-thumbnail.jpg')}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
        </div>
        

        
          <div  className={carouselVisible ? 'carousel' : 'd-carousel'}>
          <span className='close' onClick={closeCarousel}>&times;</span>
          <div className='contrlersImage'>
            <img
              id='carousel-image'
              className='carousel-content'
              src={images[currentImageIndex]}
              alt='Carousel'
            />
            <div className='carousel-controls'>
              <a className='prev' onClick={() => changeImage(-1)}>&#10094;</a>
              <a className='next' onClick={() => changeImage(1)}>&#10095;</a>
            </div>
          </div>
            
            
            <div className='carousel-thumbnails'>
              {images.map((src, index) => (
                <img
                  key={index}
                  className={`carousel-smallImage ${index === currentImageIndex ? 'active' : ''}`}
                  src={src.replace('.jpg', '-thumbnail.jpg')}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
      
      </div>

      <div className='right-sneaker'>
        <h4>Sneaker Company</h4>
        <h1>Fall Limited Edition <br />Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className='discound'>
          <h3>$125.00</h3> <span>50%</span>
        </div>
        <p className='through'>$250.00</p>
        <div className='buttonCountContainer'>
          <div className='buttonCount'>
            <button onClick={decrement}>-</button>
            <p>{noOfBuying}</p>
            <button onClick={increment}>+</button>
          </div>
          <div className='addToCartButton'>
            <img src='/images/icon-cart.svg' alt='Cart Icon' />
            <button onClick={addHandle}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
