import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';
import Options from './components/Options';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Help from './components/Help';
import { EditSelector, settingsActions, settingsTabSelector } from '../../redux/reducers/Settings';
import Details from './components/Details';

import ProfileDetailsModal from './components/ProfileDetailsModal';
const Settings = () => {
  const edit =useSelector(EditSelector)
  const show=useSelector(settingsTabSelector)
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Settings"));
        dispatch(actions.pathUpdate('Pages / Settings'))
        dispatch(settingsActions.setTab('Details'))
	  
	  }, []);
    const transition = { duration: 2, type: 'spring' };
    const transition2 = { duration: 2, type: 'spring' };
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.5, // Trigger animation when element is 50% in view
    });


  return (
    <div ref={ref} className='flex md:flex-wrap md:space-y-3 space-x-4 md:space-x-0 m-[2%] '>
      <motion.div   initial={{ y: '30%' }}
  // Start from below
  animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
  transition={transition}  className='rounded-[15px]  w-[456px] lg:w-[50%] md:w-[550px]  sm:w-[95%] border-r-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
  }}>
 <Options />
  </motion.div>
  <motion.div   initial={{ y: '-30%' }}
  // Start from below
  animate={{ y: inView ? '100%' : '0%' }} // Animate to top when in view
  transition={transition2}  className='rounded-[15px]  w-[456px] lg:w-[50%] md:w-[550px]  sm:w-[95%] border-r-[0.5px] bg-[white] border-[#ECECEC]' style={{boxShadow: '4px 4px 15px 0px #0000001C'
  }}>
    {show==='Details' &&  <Details />}
    {show==='Help' && <Help/>}
 
  </motion.div>
  {edit&&<ProfileDetailsModal/>}
    </div>
  )
}
export default Settings