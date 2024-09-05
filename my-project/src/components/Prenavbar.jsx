import React from 'react';
import { FaPhone, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const Prenavbar = () => {
  return (
    <div className='flex flex-wrap items-center justify-between bg-slate-600 h-auto py-2 px-4 text-sm text-white font-semibold'>
      {/* Emergency Line */}
      <div className='flex items-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0'>
        <FaPhone color='#21cdc0' />
        <p>Emergency Line: +92-9211430</p>
      </div>

      {/* Location */}
      <div className='flex items-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0 sm:ml-6'>
        <IoLocation color='#21cdc0' />
        <p>Location: Peshawar</p>
      </div>

      {/* Operating Hours */}
      <div className='flex items-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0 sm:ml-6'>
        <MdWatchLater color='#21cdc0' />
        <p>Mon-Fri: 08:00 am - 04:00 pm</p>
      </div>

      {/* Social Icons */}
      <div className='flex items-center space-x-3 w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0'>
        <a href="#"><FaYoutube color='#21cdc0' /></a>
        <a href="#"><FaFacebook color='#21cdc0' /></a>
        <a href="#"><FiInstagram color='#21cdc0' /></a>
        <a href="#"><FaXTwitter color='#21cdc0' /></a>
      </div>

      {/* Links */}
      <div className='flex space-x-6 w-full sm:w-auto mt-2 sm:mt-0'>
        <p><a href="#">Doctor's Timetable</a></p>
        <p><a href="#">FAQ's</a></p>
      </div>
    </div>
  );
}

export default Prenavbar;
