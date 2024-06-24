/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';

// eslint-disable-next-line react/prop-types
const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => (
        <div key={index}>
          <Image src={image} alt="slider" preview={false} width="100%" height="324px" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;

