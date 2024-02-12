import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';

const Settings = () => {
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Settings"));
        dispatch(actions.pathUpdate('Pages / Settings'))
	  
	  }, []);
  return (
    <div className=''>
      
    </div>
  )
}
export default Settings