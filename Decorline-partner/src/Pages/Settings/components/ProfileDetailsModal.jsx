import React from 'react'
import './detailsModal.css'

import { useDispatch } from 'react-redux';



import EditModal from './EditModal';
import { settingsActions } from '../../../redux/reducers/Settings';
const ProfileDetailsModal = () => {
    const dispatch =useDispatch()
    return (
        <div className="modal-container  ">
        <div className="modal scrollbar-hide">
          <div className="modal-content">
            <span className="close"  
            onClick={() => {dispatch(settingsActions.setEdit(false))}}
            >&times;</span>
            <h2>User Details</h2>
           <EditModal/>

            {/* Add other order details */}
          </div>
        </div>
      </div>
    );
  };

export default ProfileDetailsModal