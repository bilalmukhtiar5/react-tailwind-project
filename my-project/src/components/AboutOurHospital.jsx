import React from 'react';
import { FaUserDoctor, FaArrowRightLong, FaCheck } from "react-icons/fa6";
import ReactPlayer from 'react-player';

const AboutOurHospital = () => {
    return (
        <>
            <div className='max-w-[1320px] py-20 mx-auto flex flex-col lg:flex-row justify-between gap-10 px-4 container'>
                {/* Text Section */}
                <div className='flex-1'>
                    {/* Icon and Heading Row */}
                    <div className='flex items-center mb-6'>
                        <FaUserDoctor className='text-black w-[30px] h-[30px] mr-4' />
                        <h3 className='text-4xl font-bold text-black'>
                            ABOUT OUR HOSPITAL
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
                        <div className='relative pb-[56.25%] h-0'>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=qdHE39NPFIA'
                                className='absolute top-0 left-0 w-full h-full'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                </div>
                
                {/* Opening Hours Card */}
                <div className='flex-1 bg-gray-100 rounded-lg p-6'>
                    <div className='mb-10'>
                        <p>We will work with you to develop individualized care plans, including management of chronic diseases.
                            If we cannot assist, we can provide referrals or advice about the type of practitioner you require.
                        </p>
                        <p className='mt-6'>
                            We are committed to being the region’s premier healthcare network by providing patient-centered care that
                            inspires clinical and service excellence, making us the first and best choice for our patients, employees, physicians,
                            employers, volunteers, and communities. We serve the community by improving the quality of life through better health.
                        </p>
                    </div>

                    {/* Feature List */}
                    {[
                        "We conduct a range of tests to help us work out why you're not feeling well and determine the right treatment for you.",
                        "Our expert doctors, nurses, and allied health professionals manage patients with a broad range of medical issues.",
                        "We offer a wide range of care and support to our patients, from diagnosis to treatment and rehabilitation."
                    ].map((text, index) => (
                        <div key={index} className='flex items-start mt-5'>
                            <FaCheck color='#21cdc0' className='mt-1' />
                            <p className='ml-3'>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AboutOurHospital;
