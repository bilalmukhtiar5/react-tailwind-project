import React from 'react'
import { FaUserDoctor, FaArrowRightLong, FaCheck } from "react-icons/fa6";
import img1 from '/background/ptt_default.jpg'

const BackgroundSection = () => {
  return (
    <>
   
    

   <div class="max-w-full overflow-hidden shadow-lg relative text-black opacity-80">
  <img class="w-full h-[600px] object-cover" src={img1} alt="Flower and sky"/>
  <div class="py-4 absolute left-40 top-40 grid grid-cols-2 px-20">
    <h4 class="hover:text-red-700 font-semibold text-white tracking-tight text-xl mb-3">Institutional Based Private Pratice</h4>
    
    <div>
        <h3>
            The institution-based practice (IBP) lunched by the government at the tertiary care hospitals as part of its reforms programme
            in health sector has been affecting private clinics and hospitals as the number of patients benefiting from the new system has been increasing with the passing of time, according to statistics.
        </h3>
        <p class="text-gray-100">We Provide All Aspects Of Health care Services Practice For Your Whole Family!</p>
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
</div>
    </>
  )
}

export default BackgroundSection