import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { DesignActions, activeRequestSelector } from '../../../../redux/reducers/DesignBookings';

const NewOrders = () => {
    const dispatch =useDispatch()
    const DesignData =useSelector(activeRequestSelector)
    // const show=useSelector(OrderDetailsShowSelector)
    const handleViewDetails=(data)=>{
        dispatch(DesignActions.setOrderDetails(true))
        dispatch(DesignActions.setOrderData(data))
    }
    useEffect(() => {
		dispatch(DesignActions.setOrderDetails(false))
        dispatch(DesignActions.setOrderData(null))
	  }, []);
  return (
    <div className='space-y-3  w-[100%] md:w-[85%] px-[2%] font-poppins'>
    {DesignData.map((data, index) => {
     return (data.status === 'New Order' && <div key={index} className='border-[1px] rounded-[15px] w-[100%]   flex flex-col justify-center space-y-3 md:space-y-2 p-[3%]'>
        
        <div className='flex justify-between'>
        <h1 className='font-medium text-[14px] md:text-[12px] text-[#1C1C1C]'>ID : {data.id}</h1>
        <h4 className='underline text-[#023020] text-[12px] md:text-[10px]' 
        onClick={() =>handleViewDetails(data)}
        >View Details</h4>
        </div>
        <div className='space-y-2 '>
            <div className='flex flex-col items-center'>
       <img className='w-[100%] md:h-[150px]' src={data.itemImg} alt="" />
       </div>
        <h3 className=' font-medium text-[13px] md:text-[11px] text-[#2A2A2A]'>{data.itemName}</h3>
        <p className=' text-[12px] md:text-[10px] text-[#7B6F72] '>Date & Time of Booking : <span className='text-[#000000]'>{data.dateTime}</span></p>
        </div>
        <div className='flex items-center space-x-3'>
            <img className='w-[30px] h-[30px]' src={data.profilePic} alt="" />
            <h3 className='text-[#1D1617] font-semibold text-[14px] md:text-[12px]'>{data.name}</h3>
        </div>

        <div className='flex items-center text-[#1C1C1C] text-[13px] md:text-[10px] gap-[40%] justify-between'>
            <h3 className='font-medium '>Address</h3>
            <p className=''>{data.address}</p>
        </div>
        <div className='flex justify-center space-x-6'>
            <button className='text-[#ED3443] border-[#ED3443] font-poppins font-semibold text-[13px] sm:text-[10px] rounded-[20px] p-[5px_50px] sm:p-[3px_15px] border-[1px] '>Deny</button>
            <button  className='bg-[#023020] text-[white] font-poppins font-semibold text-[13px] sm:text-[10px] rounded-[20px] p-[5px_55px] sm:p-[3px_15px] ' onClick={()=>{dispatch(DesignActions.activeRequest(index))}}>Accept</button>
            </div>
        
        </div>);
    })}
       
   
  </div>
  )
}

export default NewOrders