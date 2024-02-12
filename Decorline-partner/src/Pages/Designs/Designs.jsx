import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';

const Designs = () => {
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Designs"));
        dispatch(actions.pathUpdate('Pages / Designs'))
	  
	  }, []);
  return (
    <div className=''>
      
    </div>
  )
}

export default Designs