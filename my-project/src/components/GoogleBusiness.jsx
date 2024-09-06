import React from 'react'

const googleBusiness = () => {
  return (
    <div className='w-[1200px] mx-auto grid grid-cols-2 mt-20 text-black'>
        <div className='w-full h-20 bg-gray-20 rounded-3xl my-4 p-2'>
            <p className='py-5 shadow-lg text-center rounded-full'>Out Patient Department
                <strong> View Doctors’ OPD Days</strong></p>
        </div>
        <div className='flex justify-evenly mt-7'>
            <h1 className='font-bold text-6xl'>4.9</h1>
            <p className='py-1 font-semibold'><strong>Google Business Profile</strong> <br />on 7541 reviews. </p>
            <div>
            <button className='bg-[#21cdc0] w-[150px] py-2 border mt-3 text-white rounded-full border-[#21cdc0]
            hover:bg-[#2d4990] hover:border-[#2d4990]
            font-semibold'>OPD Days</button>
            </div>
            
        </div>
        

    </div>
  )
}

export default googleBusiness