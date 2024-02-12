import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/reducers/sidebar';
import { DesignActions, DesignStatusSelector, OrderDetailsShowSelector } from '../../../redux/reducers/DesignBookings';
import NewOrders from './Components/NewOrders';
import Active from './Components/Active';
import Completed from './Components/Completed';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import OrderDetailsModal from './Components/OrderDetailsModal';
import OrderDetails from './Components/OrderDetails';

const DesignsBookings = () => {
    const transition = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });
 const status=useSelector(DesignStatusSelector)
 const show =useSelector(OrderDetailsShowSelector)
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Design Bookings"));
        dispatch(actions.pathUpdate('Pages / Bookings / Designs'))
        dispatch(DesignActions.setStatus('New Orders'))
	  
	  }, []);
  return (
    <div ref={ref} className='flex m-[2%] '>
    <motion.div   initial={{ y: '30%' }}
     // Start from below
    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
    transition={transition}  className='rounded-[15px] w-[456px] lg:w-[50%] md:w-[550px]  sm:w-[95%] border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
}}>

        <div className='border-b-[1px] border-[#D5D5D5] h-[62px] flex sm:flex-wrap sm:h-[80px] items-center space-x-3 px-2' >
           <button onClick={()=>{dispatch(DesignActions.setStatus('New Orders'))}} className={status==='New Orders'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px]  font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>New orders</button>
           <button onClick={()=>{dispatch(DesignActions.setStatus('Active'))}}   className={status==='Active'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Active</button>
          
           <button onClick={()=>{dispatch(DesignActions.setStatus('Completed'))}}   className={status==='Completed'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Completed</button>
        </div>

        <div className='flex flex-col items-center py-4 h-[70vh] md:h-[90vh] overflow-y-auto scrollbar-hide'>
            {status==='New Orders'&&<NewOrders/>}
            {status==='Active'&&<Active/>}
            {status==='Completed'&&<Completed/>}
            
        </div>

      </motion.div>

    {show && <div className='w-[50%] lg:w-[50%]'> <OrderDetailsModal/> 
    <div className='md:hidden w-[95%] ml-6'>
        <OrderDetails/>
    </div>
    </div>}
    </div>
  )
}

export default DesignsBookings