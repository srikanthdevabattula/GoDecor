import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { actions } from '../../../redux/reducers/sidebar';

import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { ProductBookingsActions, ProductDetailsShowSelector, productStatusSelector } from '../../../redux/reducers/ProductBookings';
import NewOrders from './components/NewOrders';
import Accepted from './components/Accepted';
import InTransit from './components/InTransit';
import Ready from './components/Ready';
import Delivered from './components/Delivered';
import OrderDetailsModal from './components/OrderDetailsModal';
import OrderDetails from './components/OrderDetails';

const ProductsBookings = () => {
    const transition = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });
 const status=useSelector(productStatusSelector)

 const show =useSelector(ProductDetailsShowSelector)

    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Product Orders"));
        dispatch(actions.pathUpdate('Pages / Bookings / Products'))
        dispatch(ProductBookingsActions.setStatus('New Orders'))
	  
	  }, []);
  return (
    <div ref={ref} className='flex m-[2%] '>
    <motion.div   initial={{ y: '30%' }}
     // Start from below
    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
    transition={transition}  className='rounded-[15px] w-[486px] lg:w-[50%] md:w-[550px]  sm:w-[95%] border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
}}>

        <div className='border-b-[1px] border-[#D5D5D5] py-3 flex justify-center lg:flex-wrap sm:h-[80px] items-center gap-3  px-2  overflow-x-scroll scrollbar-hide' >
           <button onClick={()=>{dispatch(ProductBookingsActions.setStatus('New Orders'))}} className={status==='New Orders'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px]  font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>New Orders</button>
           <button onClick={()=>{dispatch(ProductBookingsActions.setStatus('Accepted'))}}   className={status==='Accepted'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Accepted</button>
          
           <button onClick={()=>{dispatch(ProductBookingsActions.setStatus('Ready'))}}   className={status==='Ready'? 'h-[32px]  sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Ready</button>
           <button onClick={()=>{dispatch(ProductBookingsActions.setStatus('In-Transit'))}}   className={status==='In-Transit'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>In-Transit</button>
          
          <button onClick={()=>{dispatch(ProductBookingsActions.setStatus('Delivered'))}}   className={status==='Delivered'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Delivered</button>
       </div>

        <div className='flex flex-col items-center py-4 h-[70vh] md:h-[90vh] overflow-y-auto scrollbar-hide'>
            {status==='New Orders'&&<NewOrders/>}
            {status==='Accepted'&&<Accepted/>}
            {status==='Ready'&&<Ready/>}
            {status==='In-Transit'&&<InTransit/>}
            {status==='Delivered'&&<Delivered/>}
            
        </div>

      </motion.div>
      {show && <div className='w-[50%] lg:w-[50%]'> 
      <OrderDetailsModal/> 
    <div className='md:hidden w-[95%] ml-6'>
        <OrderDetails/> 
    </div>
    </div>}
    </div>
  )
}


export default ProductsBookings