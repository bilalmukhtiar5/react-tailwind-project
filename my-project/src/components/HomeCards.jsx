import React from 'react'
import { BiClinic } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md"; 
import { FaArrowRightLong } from "react-icons/fa6";


const HomeCards = () => {
    return (
        <div className='relative mt-[-80px] max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 z-10'>
            {/* Emergency Department Card */}
            <div className='bg-[#21cdc0] p-5 border-x-2 rounded-lg flex flex-col items-center'>
                <BiClinic className='w-[80px] h-20 text-white' />
                <h4 className='font-semibold text-white text-center mt-4'>Emergency Department</h4>
                <p className='text-white text-center mt-2'>
                    Every moment counts, it's a place where decisions can save lives.
                </p>
                <button className='bg-slate-300 px-10 mt-4 rounded-lg py-2'>
                    Click Here
                    <FaArrowRightLong className='inline-block'/>

                </button>
            </div>

            {/* Out Patient Department Card */}
            <div className='bg-[#3851a2] p-5 border-x-2 rounded-lg flex flex-col items-center'>
                <FaClipboardList className='w-[80px] h-20 text-white' />
                <h4 className='font-semibold text-white text-center mt-4'>Out Patient Department</h4>
                <p className='text-white text-center mt-2'>
                    The Outpatient Department: Where care meets continuity beyond the hospital walls.
                </p>
                <button className='bg-slate-300 px-10 mt-4 rounded-lg py-2'>
                    Click Here
                    <FaArrowRightLong className='inline-block' />

                </button>
            </div>

            {/* Opening Hours Card */}
            <div className='bg-[#2d4990] p-5 border-x-2 rounded-lg flex flex-col items-center'>
                <MdAccessTime className='w-[80px] h-20 text-white' />
                <h4 className='font-semibold text-white text-center mt-4'>Opening Hours</h4>
                <p className='text-white text-center mt-2'>
                    <strong>IBPP:</strong> 2:00 pm – 8:00 pm <br />
                    <strong>OPD Days:</strong> 8:00 am – 2:00 pm <br />
                    <strong>Emergency:</strong> 24HR / 7Days
                </p>
            </div>
        </div>
    )
}

export default HomeCards;
