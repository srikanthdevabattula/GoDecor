import React, { useEffect } from 'react'
import { DesignData } from '../../../../Data/DesignData';
import { useDispatch } from 'react-redux';
import { DesignActions } from '../../../../redux/reducers/DesignBookings';

const Completed = () => {
    const dispatch =useDispatch()
    const handleViewDetails=(data)=>{
        dispatch(DesignActions.setOrderDetails(true))
        dispatch(DesignActions.setOrderData(data))
    }
    useEffect(() => {
     
		dispatch(DesignActions.setOrderDetails(false))
        dispatch(DesignActions.setOrderData(null))
	  }, []);
  return (
    <div className='space-y-3 w-[100%] px-[2%] font-poppins'>
    {DesignData.map((data, index) => {
     return (data.status === 'Completed' && <div key={index} className='border-[1px] rounded-[15px] w-[100%]   flex flex-col justify-center space-y-3 p-[3%]'>
        
        <div className='flex justify-between'>
        <h1 className='font-medium text-[14px] text-[#1C1C1C]'>ID : {data.id}</h1>
        <h4 className='underline text-[#023020] text-[12px]'onClick={() =>handleViewDetails(data)}>View Details</h4>
        </div>
        <div className='space-y-2 '>
            <div className='flex flex-col items-center'>
       <img className='w-[100%]' src={data.itemImg} alt="" />
       </div>
        <h3 className=' font-medium text-[13px] text-[#2A2A2A]'>{data.itemName}</h3>
        <p className=' text-[12px] text-[#7B6F72] '>Date & Time of Booking : <span className='text-[#000000]'>{data.dateTime}</span></p>
        </div>
        <div className='flex items-center space-x-3'>
            <img className='w-[30px] h-[30px]' src={data.profilePic} alt="" />
            <h3 className='text-[#1D1617] font-semibold text-[14px]'>{data.name}</h3>
        </div>

        <div className='flex items-center text-[#1C1C1C] text-[13px] gap-[40%] justify-between'>
            <h3 className='font-medium '>Address</h3>
            <p className=''>{data.address}</p>
        </div>
       
        
        </div>);
    })}
  </div>
  )
}

export default Completed