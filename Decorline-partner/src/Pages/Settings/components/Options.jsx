import React from 'react'
import { MdOutlineSort } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { settingsActions } from '../../../redux/reducers/Settings';
const Options = () => {
    const dispatch =useDispatch()
  return (
    <div className='p-4 space-y-3 font-poppins h-[75vh] md:h-auto overflow-y-auto scrollbar-hide '>
      
      <div className='border-[1px] rounded-[15px] p-[20px] h-[100%] flex flex-col justify-between md:space-y-3'>


        <div className='space-y-5 md:space-y-3 text-[#444444] text-[14px] sm:text-[11px]'>
            <div onClick={()=>{dispatch(settingsActions.setTab('Details'))}} className='flex items-center justify-between border-b-[1px] cursor-pointer pb-5 sm:pb-3'><h1 className='flex items-center'><MdOutlineSort className='mr-5'/> Your Details</h1><IoIosArrowForward /></div>
            <div onClick={()=>{dispatch(settingsActions.setTab('Help'))}} className='flex items-center justify-between cursor-pointer'><h1 className='flex items-center'><GoQuestion className='mr-5'/> Help & FAQs</h1><IoIosArrowForward /></div>
        </div>

        <div className='text-[#FF3A3A] text-[14px] sm:text-[11px] cursor-pointer pt-3'>
            <h1 className='flex items-center'><AiOutlineLogout className='mr-5'/>Logout</h1>
        </div>
        </div>
        </div>
  )
}

export default Options