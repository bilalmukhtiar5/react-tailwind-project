import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <div className='w-3/4 m-auto bg-cover'>
      <div className="mt-20">
        <h1 className='text-center text-2xl'>Administering healthcare provisions to the most gravely afflicted members of our community.</h1>
        <p className='text-center my-3'>Tertiary care hospital: Where expertise meets complexity to tackle the toughest medical challenges.</p>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-gray-50 h-[400px] text-black rounded-xl mt-10"> {/* Added mx-4 for spacing */}
              <div className='h-40 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-20 w-20 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center px-6">{d.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Cardiology`,
    img: `/card-icons/healthcare.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients,
     includes diagnosing & treating medical conditions.                            `
  },
  {
    name: `Dermatology`,
    img: `/card-icons/dermatology.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Medical`,
    img: `/card-icons/healthcare.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Dermatology`,
    img: `/card-icons/healthcare.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Neurosurgery`,
    img: `/card-icons/healthcare.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Cardiology`,
    img: `/card-icons/healthcare.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Dermatology`,
    img: `/card-icons/dermatology.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Medical`,
    img: `/card-icons/healthcare.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Dermatology`,
    img: `/card-icons/healthcare.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Neurosurgery`,
    img: `/card-icons/healthcare.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }
];

export default SliderHome;
