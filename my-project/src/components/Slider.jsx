import React from 'react'

export default function Slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
      <img src="" alt="" />
      </div>
      <div>
      <img src="" alt="" />
      </div>
      <div>
      <img src="" alt="" />
      </div>
      <div>
      <img src="" alt="" />
      </div>
      <div>
      <img src="" alt="" />
      </div>
    </Slider>
  );
}

