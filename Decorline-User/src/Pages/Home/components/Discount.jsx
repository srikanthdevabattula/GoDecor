import React from 'react'
import discount from '../../../assets/home/discount.png'
const Discount = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${discount})`,
        
      };
  return (
    <div className='mt-[40px] h-[350px] md:h-[280px] sm:h-[230px] bg-center bg-cover font-poppins flex items-center pl-[10%]' style={backgroundImageStyle}>
        <div>
            <h1 className='text-[#4E5471] text-[50px] lg:text-[40px] md:text-[30px] sm:text-[20px]'>High quality sofa upto</h1>
            <h1 className='font-bold text-[50px] lg:text-[40px] md:text-[30px] sm:text-[20px] text-[#4E5471]'>70% <span className='font-normal'>off</span></h1>
            <button className='text-[#4E5471] text-[35px] lg:text-[28px] md:text-[22px] sm:text-[16px]'>See all items 🡪</button>
        </div>
    </div>
  )
}

export default Discount