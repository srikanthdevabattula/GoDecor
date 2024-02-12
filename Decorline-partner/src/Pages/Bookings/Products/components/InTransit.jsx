import React, { useEffect } from 'react'

import Card from './card';
import { ProductBookingsActions, productDataSelector } from '../../../../redux/reducers/ProductBookings';
import { useDispatch, useSelector } from 'react-redux';

const InTransit = () => {
    const ProductOrders=useSelector(productDataSelector)
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(ProductBookingsActions.setProductDetails(false))
        dispatch(ProductBookingsActions.setOrderDetails(null))
	  }, []);
  return (
    <div className='space-y-3  w-[100%] md:w-[85%] px-[2%] font-poppins'>
    {ProductOrders.map((data, index) => {
     return (data.status === 'In-Transit' && <div key={index} className='border-[1px] rounded-[15px] w-[100%]   flex flex-col justify-center space-y-3 md:space-y-2 p-[3%]'>
        <Card data={data}/>
        
        
        </div>);
    })}
       
   
  </div>
  )
}

export default InTransit