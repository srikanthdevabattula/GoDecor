import React from 'react'
import { useDispatch } from 'react-redux'
import { ProductBookingsActions } from '../../../../redux/reducers/ProductBookings'

const Card = ({data}) => {
    const dispatch =useDispatch()
    // const ProductData =useSelector()
    const handleViewDetails=(data)=>{
        dispatch(ProductBookingsActions.setProductDetails(true))
        dispatch(ProductBookingsActions.setOrderDetails(data))
    }
  return (
    <div className='space-y-3 md:space-y-2 p-[3%] '>
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
       <div className='flex justify-between'>
        <h3 className=' font-medium text-[13px] md:text-[11px] text-[#2A2A2A]'>{data.itemName}</h3>
        <p className=' font-medium text-[13px] md:text-[11px] text-[#2A2A2A]'>₹ XXX</p>
        </div>
        <div>
            <p className=' text-[12px] md:text-[10px] text-[#7B6F72] '>Product ID : <span className='text-[#000000]'>{data.id}</span></p>
        <p className=' text-[12px] md:text-[10px] text-[#7B6F72] '>Date & Time of Booking : <span className='text-[#000000]'>{data.dateTime}</span></p>
         
          </div> </div>
        <div className='flex items-center space-x-3'>
            <img className='w-[30px] h-[30px]' src={data.profilePic} alt="" />
            <h3 className='text-[#1D1617] font-semibold text-[14px] md:text-[12px]'>{data.name}</h3>
        </div>

        <div className='flex items-center text-[#1C1C1C] text-[13px] md:text-[10px] gap-[10%] justify-between'>
            <h3 className='font-medium w-[50%] '>Delivery Address</h3>
            <p className=''>{data.address}</p>
        </div>
    </div>
  )
}

export default Card