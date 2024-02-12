import React, { useEffect } from 'react'

import Card from './card';
import { useDispatch, useSelector } from 'react-redux';
import { ProductBookingsActions, productDataSelector } from '../../../../redux/reducers/ProductBookings';

const NewOrders = () => {
    const ProductOrders=useSelector(productDataSelector)
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(ProductBookingsActions.setProductDetails(false))
        dispatch(ProductBookingsActions.setOrderDetails(null))
	  }, []);
  return (
    <div className='space-y-3  w-[100%] md:w-[85%] px-[2%] font-poppins'>
    {ProductOrders.map((data, index) => {
     return (data.status === 'New Order' && <div key={index} className='border-[1px] rounded-[15px] w-[100%]   flex flex-col justify-center space-y-3 md:space-y-2 p-[3%]'>
        <Card data={data}/>
        
        <div className='flex justify-center space-x-6'>
            <button className='text-[#ED3443] border-[#ED3443] font-poppins font-semibold text-[13px] sm:text-[10px] rounded-[20px] p-[5px_50px] sm:p-[3px_15px] border-[1px] '>Deny</button>
            <button  className='bg-[#023020] text-[white] font-poppins font-semibold text-[13px] sm:text-[10px] rounded-[20px] p-[5px_55px] sm:p-[3px_15px] '>Accept</button>
            </div>
        
        </div>);
    })}
       
   
  </div>
  )
}

export default NewOrders