import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderHome = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: false,
        infinite: true,
        arrow:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        // speed: 5000,
        // autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      };

  return (
    <div className='w-2/3 m-auto bg-cover'>
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
                <button className='border text-black text-lg px-6 py-1 rounded-xl hover:bg-[#21cdc0]'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <hr/>
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
    review: `Medical department in a hospital is responsible for providing general medical care to patients, includes diagnosing & treating medical conditions.`
  },
  {
    name: `Emergency Services`,
    img: `/card-icons/siren.png`,
    review: `Emergency services in a hospital are a vital part of the healthcare system. 
    They provide urgent care to patients who are experiencing a medical emergency.`
  },
  {
    name: `Endocrinology`,
    img: `/card-icons/adrenal-gland.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients, 
                                includes diagnosing & treating medical conditions.`
  },
  {
    name: `Family Medicine`,
    img: `/card-icons/brain.png`,
    review: `Family medicine is a medical specialty that provides comprehensive health care for people of all ages. 
    Family physicians, also known as family doctors.`
  },
  {
    name: `Gastroentrology`,
    img: `/card-icons/gastroenterology.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients,
     includes diagnosing & treating medical conditions.`
  },
  {
    name: `Medicine`,
    img: `/card-icons/medicine.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients,
     includes diagnosing & treating medical conditions.`
  },
  {
    name: `Medical`,
    img: `/card-icons/neurology.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients,
     includes diagnosing & treating medical conditions.`
  },
  {
    name: `Nehprology`,
    img: `/card-icons/palytime.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients,
     includes diagnosing & treating medical conditions.`
  },
  {
    name: `Neurology`,
    img: `/card-icons/pulmonology.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients,
     includes diagnosing & treating medical conditions.`
  },
  {
    name: `Peadriatic`,
    img: `/card-icons/pulmonology.png`,
    review: `The Department of Pediatrics and Child Health at LRH is committed to providing state-of-the-art clinical services and quality care to children.`
  },
  {
    name: `psychaitry`,
    img: `/card-icons/pulmonology.png`,
    review: `The Department of Psychiatry MTI LRH Peshawar has on board three full time psychiatrists and two full time psychologists.`
  },
  {
    name: `Pumonology`,
    img: `/card-icons/pulmonology.png`,
    review: `Medical department in a hospital is responsible for providing general medical care to patients, includes diagnosing & treating medical conditions.`
  },
  {
    name: 'Rheumatology',
    img: '/card-icons/pulmonology.png',
    review:'Medical department in a hospital is responsible for providing general medical care to patients, includes diagnosing & treating medical conditions.'
  },
];

export default SliderHome;
