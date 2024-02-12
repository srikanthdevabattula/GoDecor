import React from 'react'
import { StatusActions, acceptRequestSelector } from '../../../../redux/reducers/Consultation';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../redux/reducers/sidebar';

const NewRequest = () => {
    const consultationData=useSelector(acceptRequestSelector)
    const dispatch =useDispatch()
  return (
    <div className='space-y-3 w-[100%] px-[2%]'>
    {consultationData.map((data, index) => {
     return (data.status === 'New Requests' && <div key={index} className='border-[1px] rounded-[15px] w-[100%]   flex flex-col justify-center space-y-4 p-[3%]'>
        
        <div className='flex items-center justify-center space-x-5'>
            <img src={data.profilepic} alt="" className='sm:w-[40px]' />
            <div className='space-y-1'>
                <h4 className='text-[#1D1617] font-poppins font-semibold text-[14px] sm:text-[12px]'>{data.name}</h4>
                <p className='text-[#7B6F72] font-poppins text-[12px] sm:text-[8px]'>Topic : {data.topic}</p>
            </div>
        </div>
        <div className='flex justify-center space-x-6'>
            <button className='text-[#ED3443] border-[#ED3443] font-poppins font-semibold text-[13px] sm:text-[10px] rounded-[20px] p-[5px_40px] sm:p-[3px_25px] border-[1px] '>Deny</button>
            <button onClick={()=>{dispatch(StatusActions.acceptRequest(index))}} className='bg-[#023020] text-[white] font-poppins font-semibold text-[13px] sm:text-[10px] rounded-[20px] p-[5px_50px] sm:p-[3px_25px] '>Accept</button>
            </div>
        
        </div>);
    })}
  </div>
);
};


export default NewRequest