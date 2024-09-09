import React from 'react'
import { FaUserDoctor, FaArrowRightLong, FaCheck } from "react-icons/fa6";
import img1 from '/background/ptt_default.jpg'

const BackgroundSection = () => {
    return (
        <>



            <div class="max-w-full overflow-hidden shadow-lg relative opacity-80">
                <img class="w-full h-[600px] object-cover" src={img1} alt="Flower and sky" />
                <div class="absolute left-40 top-40 grid grid-cols-2 space-5">
                <div className='px-20'>
                <h4 class="hover:text-red-700 font-semibold text-black tracking-tight text-2xl ml-20">Institutional Based Private Pratice</h4>
                <h3 className='mt-5 text-black text-4xl ml-20'>
                We Provide All Aspects Of Health care Services Practice For Your Whole Family!
                </h3>
                </div>

                <div>
                {[
                 "We conduct a range of tests to help us work out why you're not feeling well and determine the right treatment for you.",
                 "Our expert doctors, nurses, and allied health professionals manage patients with a broad range of medical issues.",
                 "We offer a wide range of care and support to our patients, from diagnosis to treatment and rehabilitation."
                ].map((text, index) => (
                <div key={index} className='flex items-start mt-5 mr-[250px] text-black font-semibold'>
                <p className='ml-3'>{text}</p>
                </div>
                ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default BackgroundSection