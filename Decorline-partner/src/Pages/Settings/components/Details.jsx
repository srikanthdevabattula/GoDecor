import React from 'react'

import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';

import { EditSelector, settingsActions } from '../../../redux/reducers/Settings';



const Details = () => {
   const dispatch =useDispatch()
   const edit =useSelector(EditSelector)
  return (
    <div className='p-4 space-y-3 flex flex-col justify-between font-poppins h-[70vh] overflow-y-auto scrollbar-hide '>
    
    <div className='space-y-4'>
        <div className='flex space-x-3 text-[#1C1C1C]'>
            <img src="" alt="pic" />
            <div><h3 className='font-medium text-[16px] sm:text-[13px]'>name</h3>
            <p className='text-[13px] sm:text-[11px]'>number</p>
            </div>
            </div>

        <div className='text-[#444444]'>
            <h1 className='text-[11px]'>Business Name</h1>
            <p className='text-[14px] sm:text-[12px]'>ABC interiors</p>
        </div>

        <div className='text-[#444444]'>
            <h1 className='text-[11px]'>Address</h1>
            <p className='text-[14px] sm:text-[12px] w-[60%]'>111, ABC Apartments, XYZ Road,
New Delhi, Delhi</p>
        </div>


        <div className='text-[#444444] space-y-2 '>
            <h1 className='text-[11px]'>Services</h1>
           <h1 className='text-[14px] sm:text-[12px] text-[#4E4E4E] h-[46px] sm:h-[35px] border-[1px] border-[#EDEDED] rounded-[10px] p-[10px_20px]'>
           Interior Products
           </h1>
           <h1 className='text-[14px] sm:text-[12px] text-[#4E4E4E] h-[46px] sm:h-[35px]  border-[1px] border-[#EDEDED] rounded-[10px] p-[10px_20px]'>
           Interior Design
           </h1>
           <h1 className='text-[14px] sm:text-[12px] text-[#4E4E4E] h-[46px] sm:h-[auto] border-[1px] border-[#EDEDED] rounded-[10px] p-[10px_20px]'>
           Consultations & Quotations
           </h1>
        </div>


      

        



    </div>
    <div className='space-y-5 '>
            <button onClick={()=>{dispatch(settingsActions.setEdit(true))}}  className='flex items-center  text-[#023020] text-[13px]'><MdOutlineEdit className='mr-5 text-[20px]'/> Edit Details</button>
            <button className='flex items-center text-[#FF3A3A] text-[13px]'><RiDeleteBin6Line className='mr-5 text-[20px]'/> Delete Account</button>
        </div>

       
    </div>
  )
}

export default Details