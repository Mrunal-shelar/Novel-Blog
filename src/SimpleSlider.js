import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h2> React Slick Carousel </h2>
      <Slider {...settings}>
        <div>
          <img src="https://th.bing.com/th/id/OIP.jBu17-7x5mP_EWTn5yh6NgAAAA?rs=1&pid=ImgDetMain" alt="slide1" />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.jBu17-7x5mP_EWTn5yh6NgAAAA?rs=1&pid=ImgDetMain" alt="slide2" />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.jBu17-7x5mP_EWTn5yh6NgAAAA?rs=1&pid=ImgDetMain" alt="slide3" />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.jBu17-7x5mP_EWTn5yh6NgAAAA?rs=1&pid=ImgDetMain" alt="slide4" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;


