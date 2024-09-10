import React from 'react';
import img1 from '/our-team/junaid-sarfaraz.png';
import img2 from '/our-team/2.jpg';
import img3 from '/our-team/hamid-shehzad-1.jpg';
import img4 from '/our-team/ibrarkhanhd.png';

const OurTeam = () => {
  return (
    <div className='container mx-auto mt-20'>
      {/* Header Section */}
      <div className='text-center'>
        <h1 className='my-5 font-semibold text-4xl'>Our Management Team</h1>
        <p className='text-lg'>
          Our administration and support staff all have exceptional people skills and are trained to assist you with all medical enquiries.
        </p>
      </div>

      {/* Team Members Section */}
      <div className='flex flex-wrap justify-center gap-8 my-10'>
        {/* Team Member 1 */}
        <div className='text-center'>
          <img src={img1} alt="Dr Junaid Sarfraz Khan" className='w-[250px] h-[150px] object-cover rounded-md' />
          <h1 className='mt-2 font-medium'>CEO/Dean</h1>
          <p>Dr Junaid Sarfraz Khan</p>
        </div>

        {/* Team Member 2 */}
        <div className='text-center'>
          <img src={img4} alt="Dr Ibrar Khan" className='w-[250px] h-[150px] object-cover rounded-md' />
          <h1 className='mt-2 font-medium'>CEO/Dean</h1>
          <p>Dr Ibrar Khan</p>
        </div>

        {/* Team Member 3 */}
        <div className='text-center'>
          <img src={img3} alt="Dr Hamid Shehzad" className='w-[250px] h-[150px] object-cover rounded-md' />
          <h1 className='mt-2 font-medium'>CEO/Dean</h1>
          <p>Dr Hamid Shehzad</p>
        </div>

        {/* Team Member 4 */}
        <div className='text-center'>
          <img src={img2} alt="Team Member" className='w-[250px] h-[150px] object-cover rounded-md' />
          <h1 className='mt-2 font-medium'>CEO/Dean</h1>
          <p>Dr Junaid Sarfraz Khan</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
