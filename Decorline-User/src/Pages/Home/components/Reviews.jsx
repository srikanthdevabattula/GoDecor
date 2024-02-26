import React from 'react'
import review from '../../../assets/home/review1.jpg'
const Reviews = () => {
  return (
    <div className='px-[10%] mt-[50px]'>
        <div className='bg-[#F4F0EC] rounded-[15px] p-[30px] space-y-3'>
            <h1 className='text-center text-[#292F36] font-DMSerif text-[50px] lg:text-[40px] md:text-[30px] sm:text-[18px]'>What the People Thinks <br />
 About Us</h1>

 <div className='flex flex-wrap items-center justify-center gap-4'>
    <div className='bg-[white] w-[30%] lg:w-[48%] md:w-[48%] sm:w-[100%] p-[30px_20px] sm:p-[20px_10px] h-[300px] md:h-[250px] sm:h-[200px] rounded-[10px] space-y-2'>
        <div className='flex items-center space-x-4'>
            <img src={review} alt="" className='rounded-[100px] w-[77px] md:w-[55px] sm:w-[45px]'/>
            <div>
                <h3 className='font-DMSerif text-[25px] md:text-[22px] sm:text-[16px] text-[#292F36]'>Nattasha Mith</h3>
                <p className='font-Jost text-[18px] md:text-[16px] sm:text-[13px] text-[#4D5053]'>Sydney, USA</p>
            </div>
        </div>
        <p className='text-[22px] md:text-[19px] sm:text-[14px] font-Jost text-[#4D5053] '>Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.</p>
    </div>


    <div className='bg-[white] w-[30%] lg:w-[48%] md:w-[48%] sm:w-[100%] p-[30px_20px] sm:p-[20px_10px] h-[300px] md:h-[250px] sm:h-[200px] rounded-[10px] space-y-2'>
        <div className='flex items-center space-x-4'>
            <img src={review} alt="" className='rounded-[100px] w-[77px] md:w-[55px] sm:w-[45px]'/>
            <div>
                <h3 className='font-DMSerif text-[25px] md:text-[22px] sm:text-[16px] text-[#292F36]'>Nattasha Mith</h3>
                <p className='font-Jost text-[18px] md:text-[16px] sm:text-[13px] text-[#4D5053]'>Sydney, USA</p>
            </div>
        </div>
        <p className='text-[22px] md:text-[19px] sm:text-[14px] font-Jost text-[#4D5053] '>Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.</p>
    </div>

    <div className='bg-[white] w-[30%] lg:w-[48%] md:w-[48%] sm:w-[100%] p-[30px_20px] sm:p-[20px_10px] h-[300px] md:h-[250px] sm:h-[200px] rounded-[10px] space-y-2'>
        <div className='flex items-center space-x-4'>
            <img src={review} alt="" className='rounded-[100px] w-[77px] md:w-[55px] sm:w-[45px]'/>
            <div>
                <h3 className='font-DMSerif text-[25px] md:text-[22px] sm:text-[16px] text-[#292F36]'>Nattasha Mith</h3>
                <p className='font-Jost text-[18px] md:text-[16px] sm:text-[13px] text-[#4D5053]'>Sydney, USA</p>
            </div>
        </div>
        <p className='text-[22px] md:text-[19px] sm:text-[14px] font-Jost text-[#4D5053] '>Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.</p>
    </div>
 </div>
        </div>
    </div>
  )
}

export default Reviews