import React from 'react'
import re from '../../../assets/earnings/earpic.png'
const RecentEarnings = () => {
  return (
    <div className='font-poppins p-3'>
        <h2 className='text-[#1C1C1C] font-medium text-[14px]'>Recent Earnings</h2>
       
      <div className='border-[1px] rounded-[15px] border-[#EDEDED]  items-center  px-2'>
            <div className='flex space-x-3 my-3 w-[100%]'>
                <img src={re} alt=""  className='rounded-[20px] w-[38px]'/>
                <div className='w-[100%]'>
                    <div className='flex text-[13px]  justify-between'>
                    <h1 className=''>Consultation : Design Analysis</h1>
                    <h4 className='font-medium'>XXX</h4>
                    </div>
                    <p className='text-[#7B6F72] text-[11px]'>
                    Nov 17, 2023 | 11:00 AM
                    </p>
                    
                </div>
            </div>

               <div className='flex space-x-3 my-3 w-[100%]'>
                <img src={re} alt=""  className='rounded-[20px] w-[38px]'/>
                <div className='w-[100%]'>
                    <div className='flex text-[13px]  justify-between'>
                    <h1 className=''>Consultation : Design Analysis</h1>
                    <h4 className='font-medium'>XXX</h4>
                    </div>
                    <p className='text-[#7B6F72] text-[11px]'>
                    Nov 17, 2023 | 11:00 AM
                    </p>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default RecentEarnings