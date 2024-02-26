import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import AllChats from './components/AllChats';
import UserChat from './components/UserChat';
const Chat = () => {
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Chat"));
        dispatch(actions.pathUpdate('Pages / Chat'))
	  
	  }, []);

  
 
    const transition = { duration: 2, type: 'spring' };
    const transition2 = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });
  
     
    return (
      <div ref={ref} className='flex md:flex-wrap  space-x-4 md:space-x-2 sm:space-x-0 sm:space-y-4 m-[2%] '>
      <motion.div   initial={{ y: '30%' }}
  // Start from below
  animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
  transition={transition}  className='rounded-[15px]  w-[456px] lg:w-[50%] md:w-[38%]  sm:w-[95%] border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
  }}>
 <AllChats/>
  </motion.div>
  <motion.div   initial={{ y: '-30%' }}
  // Start from below
  animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
  transition={transition2}  className='rounded-[15px]  w-[456px] lg:w-[50%] md:w-[58%]  sm:w-[95%] border-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
  }}>
<UserChat/>
  </motion.div>
  </div>
  )
}

export default Chat