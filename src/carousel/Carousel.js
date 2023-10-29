import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import { dataDigitalBestSeller } from './data';

export function Carousel() {
  const [defaultImage, setDefaultImage ] = useState({});
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt
    }));
  };

  return (
    <div className="App">
      <div className='carousel-container'>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>

            <div className="card-bottom">
              <h3>{item.price}</h3>
            </div>

            <button className='buy-btn'>Купить</button>

          </div>
        ))}
      </Slider>
      </div>
      </div>
  );
}

