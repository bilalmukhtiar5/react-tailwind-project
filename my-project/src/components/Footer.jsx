import React from 'react'
import logo from '../assets/images/logo-dark.png'
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-[#1d2a4d]'>
      <div className='w-full max-w-[1280px] container mx-auto pt-20 px-6 lg:px-20 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="" className="w-40" />
          <br />
          <p>Our goal is to deliver quality care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
          <br />
          <p>Our goal is to deliver quality care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
        </div>

        {/* Departments */}
        <div className="text-center">
          <h2 className='text-lg font-bold'>Departments</h2>
          <div className='mt-6'>
            <p className='mt-2'><a href="">Psychiatry</a></p>
            <p className='my-1'><a href="">Medicine</a></p>
            <p className='my-1'><a href="">Paeds</a></p>
            <p className='my-1'><a href="">Family Medicine</a></p>
            <p className='my-1'><a href="">Dermatology</a></p>
            <p className='my-1'><a href="">Endocrinology</a></p>
            <p className='my-1'><a href="">Gastroenterology</a></p>
            <p className='my-1'><a href="">Nephrology</a></p>
            <p className='my-1'><a href="">Neurology</a></p>
            <p className='my-1'><a href="">Pulmonology</a></p>
            <p className='my-1'><a href="">Rheumatology</a></p>
          </div>
        </div>

        {/* Important Links */}
        <div className='text-center'>
          <h2 className='text-lg font-bold'>Important Links</h2>
          <div className='mt-6'>
            <p className='mt-2'><a href="">Our Clinic</a></p>
            <p className='my-1'><a href="">Our Doctors</a></p>
            <p className='my-1'><a href="">Our Blog</a></p>
            <p className='my-1'><a href="">Financial Statistics</a></p>
            <p className='my-1'><a href="">Patient Statistics</a></p>
            <p className='my-1'><a href="">Quality, Safety and Service</a></p>
          </div>
        </div>

        {/* Quick Contacts */}
        <div className='rounded-md text-center bg-slate-50 w-[300px] h-auto text-black p-6'>
          <h2 className='text-lg font-bold'>Quick Contacts</h2>
          <p className='mt-4'>If you have any questions or need help, feel free to contact us for medical assistance.</p>
          <div className='flex items-center justify-center mt-4'>
            <FaPhone className='text-xl' />
            <p className='ml-2 text-lg'>9211430</p>
          </div>
          <p className='mt-2'>KPK, Peshawar City</p>
          <a href="" className='text-blue-500 hover:underline'>Get Directions</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
