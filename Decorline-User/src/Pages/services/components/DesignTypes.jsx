import React from 'react'
import cat1 from '../../../assets/Services/types/type1.png'
import cat2 from '../../../assets/Services/types/type2.png'
import cat3 from '../../../assets/Services/types/type3.png'
import cat4 from '../../../assets/Services/types/type4.png'
import cat5 from '../../../assets/Services/types/type5.png'
import cat6 from '../../../assets/Services/types/type6.png'
const DesignTypes = () => {
  return (
    <div className='pt-6'>
    <h1 className='text-[48px] lg:text-[40px] md:text-[30px] sm:text-[20px] font-Jost font-medium text-center my-5'>
    Select what type of design fits your need
    </h1>

    <div className=' px-[10%] flex flex-wrap gap-5 md:gap-3 items-center justify-center'>
        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
            <img src={cat1} alt="cat" className=' w-[150px] h-[110px] md:w-[120px] md:h-[90px] sm:w-[50px] sm:h-[40px]' />
            <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Residential</p>
        </div>

        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
            <img src={cat2} alt="cat" className=' w-[150px] h-[110px] md:w-[120px] md:h-[90px] sm:w-[50px] sm:h-[40px]' />
            <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Healthcare</p>
        </div>

        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
            <img src={cat3} alt="cat" className=' w-[150px] h-[110px] md:w-[120px] md:h-[90px] sm:w-[50px] sm:h-[40px]' />
            <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Commercial</p>
        </div>

        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
            <img src={cat4} alt="cat" className=' w-[150px] h-[110px] md:w-[120px] md:h-[90px] sm:w-[50px] sm:h-[40px]' />
            <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Institutional</p>
        </div>

        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
            <img src={cat5} alt="cat" className=' w-[150px] h-[110px] md:w-[120px] md:h-[90px] sm:w-[50px] sm:h-[40px]' />
            <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Retail</p>
        </div>

        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
            <img src={cat6} alt="cat" className=' w-[150px] h-[110px] md:w-[120px] md:h-[90px] sm:w-[50px] sm:h-[40px]' />
            <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Luxury 
Interors</p>
        </div>

        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
          <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Others</p>
        </div>
        <div className='border-[#bdbbbb] border-[1px] rounded-[18px] gap-[7px] flex flex-col justify-center items-center p-4 w-[244px] h-[235px] lg:w-[200px] lg:h-[220px] md:w-[170px] md:h-[170px] sm:w-[80px] sm:h-[80px]'>
           <p className='font-poppins text-[34px] lg:text-[27px] md:text-[22px] sm:text-[10px] text-center'>Not sure?
Book Consultation!</p>
        </div>
    </div>
</div>
  )
}

export default DesignTypes