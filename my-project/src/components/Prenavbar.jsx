import React from 'react';
import { FaPhone, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const Prenavbar = () => {
  return (
    <div className='flex flex-wrap bg-slate-600 h-auto py-2 font-semibold items-center px-4 text-sm'>
      <div className='flex items-center text-white space-x-2 w-full sm:w-auto mb-2 sm:mb-0'>
        <FaPhone />
        <p>Emergency Line: +92-9211430</p>
      </div>

      <div className='flex items-center text-white space-x-2 w-full sm:w-auto mb-2 sm:mb-0 sm:ml-6'>
        <IoLocation />
        <p>Location: Peshawar</p>
      </div>

      <div className='flex items-center text-white space-x-2 w-full sm:w-auto mb-2 sm:mb-0 sm:ml-6'>
        <MdWatchLater />
        <p>Mon-Fri: 08:00 am - 04:00 pm</p>
      </div>

      <div className='flex items-center text-white space-x-3 w-full sm:w-auto sm:ml-auto'>
        <FaYoutube />
        <FaFacebook />
        <FiInstagram />
        <FaXTwitter />
      </div>

      <div className='flex flex-wrap space-x-6 w-full sm:w-auto mt-2 sm:mt-0 sm:ml-6 text-white'>
        <p><a href="#">Doctor's Timetable</a></p>
        <p><a href="#">FAQ's</a></p>
      </div>
    </div>
  );
}

export default Prenavbar;
