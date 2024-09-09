import React from 'react'
import img1 from '/our-team/junaid-sarfaraz.png'
import img2 from '/our-team/2.jpg'
import img3 from '/our-team/hamid-shehzad-1.jpg'
import img4 from '/our-team/ibrarkhanhd.png'

const OurTeam = () => {
    return (
        <div className='container h-[300px] mx-auto my-[100px]'>
            <div className='text-center'>
                <h1 className='my-5 font-semibold text-4xl'>Our Management Team</h1>
                <p className='text-lg'>Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.

                </p>
            </div>
            <div className='flex justify-center gap-5 my-10'>
                <div className='text-center'>
                <img src={img1} alt="" width={250} height={150} />
                <h1 className='mt-2 font-medium'>CEO/Dean</h1>
                <p>Dr Junaid Sarfraz Khan</p>
                </div>
                <div className='text-center'>
                <img src={img4} alt="" width={250} height={100}/>
                <h1 className='mt-2 font-medium'>CEO/Dean</h1>
                <p>Dr Junaid Sarfraz Khan</p>

                </div>
               
                <div className='text-center'>
                <img src={img3} alt="" width={250} height={100}/>
                <h1 className='mt-2 font-medium'>CEO/Dean</h1>
                <p>Dr Junaid Sarfraz Khan</p>
                </div>
                <div className='text-center'>
                <img src={img2} alt="" width={250} height={150}/>
                <h1 className='mt-2 font-medium'>CEO/Dean</h1>
                <p>Dr Junaid Sarfraz Khan</p>
                </div>
                
                
            </div>

        </div>
    )
}

export default OurTeam