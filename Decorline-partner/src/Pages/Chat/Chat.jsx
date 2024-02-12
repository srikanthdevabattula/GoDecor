import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/sidebar';

const Chat = () => {
    const dispatch=useDispatch()
    useEffect(() => {
		dispatch(actions.update("Chat"));
        dispatch(actions.pathUpdate('Pages / Chat'))
	  
	  }, []);
  return (
    <div className=''>
      
    </div>
  )
}

export default Chat