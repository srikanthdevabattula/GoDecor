import React from 'react'
import pic from '../../../assets/earnings/earpic.png'
const AllChats = () => {
  return (
    <div className='p-4 space-y-3 font-poppins h-[70vh] sm:h-[30vh] overflow-y-auto scrollbar-hide '>
        <div className='flex w-[100%] items-center space-x-3'>
            <img src={pic} alt="i" className='rounded-[20px]'/>
            <div className='flex justify-between w-[100%] '>
            <div>
                <h1 className='text-[16px] sm:text-[12px]'>Jane Doe</h1>
                <p className='text-[#4F5E7B] text-[14px] sm:text-[10px]'>hello</p>
            </div>
            <div>
                <p className='text-[#333333] text-[12px] sm:text-[9px]'>18:30</p>
                <p className='text-[white] text-[12px] sm:text-[9px] font-bold w-[20px] bg-[#023020] text-center rounded-[20px]'>5</p>
            </div>
            </div>
        </div>

        <div className='flex w-[100%] items-center space-x-3'>
            <img src={pic} alt="i" className='rounded-[20px]'/>
            <div className='flex justify-between w-[100%] '>
            <div>
                <h1 className='text-[16px] sm:text-[12px]'>Jane Doe</h1>
                <p className='text-[#4F5E7B] text-[14px] sm:text-[10px]'>hello</p>
            </div>
            <div>
                <p className='text-[#333333] text-[12px] sm:text-[9px]'>18:30</p>
                <p className='text-[white] text-[12px] sm:text-[9px] font-bold w-[20px] bg-[#023020] text-center rounded-[20px]'>5</p>
            </div>
            </div>
        </div>


        <div className='flex w-[100%] items-center space-x-3'>
            <img src={pic} alt="i" className='rounded-[20px]'/>
            <div className='flex justify-between w-[100%] '>
            <div>
                <h1 className='text-[16px] sm:text-[12px]'>Jane Doe</h1>
                <p className='text-[#4F5E7B] text-[14px] sm:text-[10px]'>hello</p>
            </div>
            <div>
                <p className='text-[#333333] text-[12px] sm:text-[9px]'>18:30</p>
                <p className='text-[white] text-[12px] sm:text-[9px] font-bold w-[20px] bg-[#023020] text-center rounded-[20px]'>5</p>
            </div>
            </div>
        </div>

        

    </div>

  )
}

export default AllChats