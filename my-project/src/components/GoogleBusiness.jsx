import React from 'react';

const GoogleBusiness = () => {
  return (
    <div className='container mx-auto mt-20 mb-20 px-4'>
      <div className='flex flex-col lg:flex-row justify-evenly items-center text-black'>
        {/* OPD Information Box */}
        <div className='w-full lg:w-[500px] bg-gray-100 rounded-3xl p-1 shadow-lg mb-8 lg:mb-0'>
          <p className='text-center rounded-xl'>
            Out Patient Department <br />
            <strong> View Doctors’ OPD Days</strong>
          </p>
        </div>

        {/* Google Business Profile Info */}
        <div className='flex items-center justify-center mb-8 lg:mb-0'>
          <h1 className='font-bold text-4xl mr-4'>4.9</h1>
          <p className='font-semibold text-center'>
            <strong>Google Business Profile</strong> <br />
            on 7541 reviews.
          </p>
        </div>

        {/* OPD Days Button */}
        <div>
          <button className='bg-[#21cdc0] w-[150px] py-2 border text-white rounded-full border-[#21cdc0]
            hover:bg-[#2d4990] hover:border-[#2d4990] font-semibold transition-all'>
            OPD Days
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleBusiness;
