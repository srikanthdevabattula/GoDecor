import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/reducers/sidebar';
import { StatusActions, statusSelector } from '../../../redux/reducers/Consultation';
import NewRequest from './Components/NewRequest';
import Accepted from './Components/Accepted';
import Upcoming from './Components/Upcoming';
import Completed from './Components/Completed';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
const Consultations = () => {
    const transition = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });
    const status=useSelector(statusSelector)
   console.log(status)
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Consultation Bookings"));
        dispatch(actions.pathUpdate('Pages / Bookings / Consultations'))
        dispatch(StatusActions.setConsultationStatus('New Requests'))
	  }, []);
  return (
    <div ref={ref}>
    <motion.div   initial={{ y: '30%' }}
     // Start from below
    animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
    transition={transition} 
    className='m-[2%] rounded-[15px] w-[406px]  sm:w-[95%] border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
}}>

        <div 
            className='border-b-[1px] border-[#D5D5D5] h-[62px] flex sm:flex-wrap sm:h-[80px] items-center justify-between px-2' >
           <button onClick={()=>{dispatch(StatusActions.setConsultationStatus('New Requests'))}} className={status==='New Requests'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px]  font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>New Requests</button>
           <button onClick={()=>{dispatch(StatusActions.setConsultationStatus('Accepted'))}} className={status==='Accepted'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Accepted</button>
           <button onClick={()=>{dispatch(StatusActions.setConsultationStatus('Upcoming'))}} className={status==='Upcoming'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Upcoming</button>
           <button onClick={()=>{dispatch(StatusActions.setConsultationStatus('Completed'))}} className={status==='Completed'? 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#023020] rounded-[15px] text-[13px] font-poppins font-semibold text-[#023020] flex items-center': 'h-[32px] sm:h-[25px] sm:text-[9px] p-[8px] border-[1.5px] border-[#C8C8C8] rounded-[15px] text-[13px] font-poppins font-semibold text-[#868686] flex items-center'}>Completed</button>
        </div>

        <div className='flex flex-col items-center py-4'>
            {status==='New Requests'&&<NewRequest/>}
            {status==='Accepted'&&<Accepted/>}
            {status==='Upcoming'&&<Upcoming/>}
            {status==='Completed'&&<Completed/>}
        </div>
    
    </motion.div>
    </div>
  )
}

export default Consultations