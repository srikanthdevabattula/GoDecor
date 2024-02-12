import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';

const Earnings = () => {
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Earnings"));
        dispatch(actions.pathUpdate('Pages / Earnings'))
	  
	  }, []);
  return (
    <div className=''>
      
    </div>
  )
}
export default Earnings