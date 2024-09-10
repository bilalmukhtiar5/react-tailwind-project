import ReactPlayer from 'react-player'
import React from 'react'

const InspiringStories = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 h-auto lg:h-[400px]'>
      {/* Text Section */}
      <div className='flex flex-col justify-center'>
        <h1 className='text-2xl lg:ml-60 font-bold text-center lg:text-left'>Inspiring Stories!</h1>
        <p className='mt-5 mx-5 lg:ml-60 lg:mr-20 text-center lg:text-left'>
          Their doctors include highly qualified practitioners who come from a range of backgrounds and bring with them a
          diversity of skills and special interests. They also have registered nurses on staff who are available to triage
          any urgent matters, and the administration and support staff all have exceptional people skills.
        </p>
      </div>

      {/* Video Section */}
      <div className='flex justify-center items-center'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=qdHE39NPFIA'
          width='100%'
          height='100%'
          className='w-[90%] h-[90%] lg:w-[70%] lg:h-[70%]'
        />
      </div>
    </div>
  )
}

export default InspiringStories
