import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './storiesslider.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import img1 from '/stories-slider/01.png';
import img2 from '/stories-slider/02.png';
import img3 from '/stories-slider/04.png';
import img4 from '/stories-slider/05.png';

const StoriesSlider = () => {
  return (
    // Hide on screens smaller than 'md' (768px)
    <div className='my-20 h-auto hidden md:block'>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StoriesSlider;
