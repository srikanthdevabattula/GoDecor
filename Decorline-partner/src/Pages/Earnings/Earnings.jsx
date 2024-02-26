import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import TotalEarnings from './components/TotalEarnings';
import RecentEarnings from './components/RecentEarnings';
const Earnings = () => {

  
  
 
  const transition = { duration: 2, type: 'spring' };
  const transition2 = { duration: 2, type: 'spring' };
  const { ref, inView } = useInView({
      triggerOnce: true, // Only trigger animation once
      threshold: 0.5, // Trigger animation when element is 50% in view
  });

    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Earnings"));
        dispatch(actions.pathUpdate('Pages / Earnings'))
	  
	  }, []);
  return (
    <div ref={ref} className='flex md:flex-wrap md:space-y-3 space-x-4 md:space-x-0 m-[2%] '>
    <motion.div   initial={{ y: '30%' }}
// Start from below
animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
transition={transition}  className='rounded-[15px]  w-[456px] lg:w-[50%] md:w-[550px]  sm:w-[95%] border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
}}>
<TotalEarnings/>
</motion.div>

<motion.div   initial={{ y: '-30%' }}
// Start from below
animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
transition={transition2}  className='rounded-[15px]  w-[456px] lg:w-[50%] md:w-[550px]  sm:w-[95%]  border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
}}>
<RecentEarnings/>
</motion.div>



    </div>
  )
}
export default Earnings