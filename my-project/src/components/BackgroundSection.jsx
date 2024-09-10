import React from 'react';
import { FaCheck } from "react-icons/fa6";
import img1 from '/background/ptt_default.jpg';

const BackgroundSection = () => {
  return (
    <div className="relative max-w-full shadow-lg container mx-auto my-20">
      {/* Background Image */}
      <div className="relative">
        <img className="w-full h-[600px] object-cover" src={img1} alt="Healthcare background" />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col lg:flex-row items-start justify-center lg:justify-between p-8 lg:p-20 space-y-8 lg:space-y-0 text-white">
        {/* Left Section */}
        <div className="lg:w-1/2 text-left px-6">
          <h4 className="font-semibold text-white text-xl lg:text-2xl mb-4 hover:text-red-500 transition-colors">
            Institutional Based Private Practice
          </h4>
          <h3 className="text-white text-2xl lg:text-4xl font-bold leading-snug">
            We Provide All Aspects Of Health Care Services Practice For Your Whole Family!
          </h3>
        </div>

        {/* Right Section - Features */}
        <div className="lg:w-1/2 space-y-5">
          {[
            "We conduct a range of tests to help us work out why you're not feeling well and determine the right treatment for you.",
            "Our expert doctors, nurses, and allied health professionals manage patients with a broad range of medical issues.",
            "We offer a wide range of care and support to our patients, from diagnosis to treatment and rehabilitation."
          ].map((text, index) => (
            <div key={index} className="flex items-start text-lg">
              <FaCheck color="#21cdc0" className="mt-1 mr-3" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
