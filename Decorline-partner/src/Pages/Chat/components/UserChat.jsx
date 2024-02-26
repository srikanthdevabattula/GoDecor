import React from 'react'
import pic from '../../../assets/earnings/earpic.png'
import { IoMdSend } from "react-icons/io";
const UserChat = () => {
  return (
    <div className='h-[100%] md:h-[70vh]'>
        <div className='flex space-x-5 h-[10%] p-2 items-center border-b-[1px]'>
            <img src={pic} alt=""  className='w-[38px] rounded-[20px]'/>
            <h2>John Doe</h2>
        </div>

        <div className='h-[80%]'>

        </div>

        <div className='border-t-[1px] h-[10%] flex items-center'>
      <input type="text" name="" id="" placeholder='Write your message here...' className='h-[100%] w-[90%] outline-none border-0'/>
      <IoMdSend className='text-[30px]'/> </div>
    </div>
  )
}

export default UserChat