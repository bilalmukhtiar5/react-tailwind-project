import React from 'react';
import { FaUserDoctor, FaArrowRightLong } from "react-icons/fa6";
import ReactPlayer from 'react-player';

const AboutOurHospital = () => {
    return (
        <div className='max-w-[1320px] py-20 mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-10 px-6'>
            {/* Text Section */}
            <div>
                {/* Icon and Heading Row */}
                <div className='flex items-center mb-6'>
                    <FaUserDoctor className='text-black w-[30px] h-[30px] mr-4' />
                    <h3 className='text-4xl font-bold text-black'>
                        About Our Hospital
                    </h3>
                </div>

                {/* Paragraph and Button */}
                <p className='text-black text-lg leading-relaxed mb-6'>
                    Our goal is to deliver quality care in a courteous, respectful,
                    and compassionate manner. We hope you will allow us to care for you and
                    strive to be the first and best choice for healthcare.
                </p>
                <button className='bg-[#141f40] text-white px-6 py-3 mt-4 rounded-lg flex items-center w-max'>
                    Find a Doctor
                    <FaArrowRightLong className='ml-2' />
                </button>

                {/* Video Section */}
                <div className='mt-10'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=qdHE39NPFIA' />
                </div>
            </div>
            {/* Opening Hours Card */}
           
        </div>
    );
}

export default AboutOurHospital;
