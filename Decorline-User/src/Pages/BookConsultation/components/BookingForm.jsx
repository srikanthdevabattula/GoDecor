import React, { useState } from 'react'
import { BsBuildings } from "react-icons/bs";
const BookingForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  return (
    <div>  <form action="" className='space-y-3'>
    <select name="selectedFruit" onChange={handleChange} value={selectedOption} className='text-[#CDA274] text-[14px] lg:text-[12px] md:text-[10px] font-poppins outline-none p-3 md:p-2 bg-[#F4F0EC] rounded-[20px] mt-4 w-[100%]'>
      <option value="" className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Consultation subject (Optional)</option>
      <option value="Space Planning"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Space Planning</option>
      <option value="Color Schemes and Palettes"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Color Schemes and Palettes</option>
      <option value="Furniture Selection"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Furniture Selection</option>
      <option value="Lighting Design"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Lighting Design</option>
      <option value="Accessorizing and Decor"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Accessorizing and Decor</option>
      <option value="Budget Planning"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Budget Planning</option>
      <option value="Customization and Personalization"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Customization and Personalization</option>
      <option value="Sustainable Design"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Sustainable Design</option>
      <option value="Material and Finish Selection"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Material and Finish Selection</option>
      <option value="Other"  className='bg-[white] text-[#1C1C1C] font-poppins text-[14px] lg:text-[12px] md:text-[10px]'>Other</option>
    </select>

    <div className='space-y-2 text-[14px] lg:text-[12px] md:text-[10px]'>
      <h3 className='text-[#1C1C1C] font-Jost text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px]'>Enter your address</h3>

      <div className='flex items-center border-[#BEBEBE] border-[1px] rounded-[15px] p-2'>
      <BsBuildings className='w-[10%]'/>
        <input type="text" name="" id="" placeholder='Address Line 1' className='outline-none w-[90%]'/>
      </div>
      <div className='flex items-center border-[#BEBEBE] border-[1px] rounded-[15px] p-2'>
      <BsBuildings className='w-[10%]'/>
        <input type="text" name="" id="" placeholder='Address Line 2' className='outline-none w-[90%]'/>
      </div>
      <div className='flex space-x-2'>
      <div className='flex items-center border-[#BEBEBE] border-[1px] rounded-[15px] p-2 w-[50%]'>
      <BsBuildings className='w-[15%]'/>
        <input type="text" name="" id="" placeholder='City' className='outline-none w-[90%]'/>
      </div>
      <div className='flex items-center border-[#BEBEBE] border-[1px] rounded-[15px] p-2 w-[50%]'>
      <BsBuildings className='w-[15%]'/>
        <input type="text" name="" id="" placeholder='State' className='outline-none w-[90%]'/>
      </div>
      </div>
      <div className='flex items-center border-[#BEBEBE] border-[1px] rounded-[15px] p-2'>
      <BsBuildings className='w-[10%]'/>
        <input type="text" name="" id="" placeholder='State' className='outline-none w-[90%]'/>
      </div>
    </div>
    <div className='flex justify-center'>
    <button className='bg-[#292F36] font-poppins text-[14px] lg:text-[12px] md:text-[10px] sm:text-[8px] font-semibold text-[white] rounded-[15px] h-[70px] w-[390px] lg:h-[60px] lg:w-[340px] md:h-[50px] md:w-[280px] sm:h-[35px] sm:w-[200px] text-center'>CONTINUE</button>
    </div> 
    </form></div>
  )
}

export default BookingForm