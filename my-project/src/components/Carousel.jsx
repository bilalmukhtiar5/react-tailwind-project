import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider2 from '../assets/images/slider-2.jpg'
import Slider3 from '../assets/images/slider-3.jpg'
import Slider4 from '../assets/images/slider-4.jpg'
import Slider5 from '../assets/images/Slider-5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={Slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={Slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slider4} alt="" /></SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
