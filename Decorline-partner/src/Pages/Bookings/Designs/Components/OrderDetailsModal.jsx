import React from 'react'
import './detailsModal.css'
import { DesignActions } from '../../../../redux/reducers/DesignBookings';
import { useDispatch } from 'react-redux';
import OrderDetails from './OrderDetails';
const OrderDetailsModal = () => {
    const dispatch =useDispatch()
    return (
        <div className="modal-container  hidden md:flex">
        <div className="modal scrollbar-hide">
          <div className="modal-content">
            <span className="close"  onClick={() => {dispatch(DesignActions.setOrderDetails(false))}}>&times;</span>
            <h2>Order Details</h2>
           <OrderDetails/>

            {/* Add other order details */}
          </div>
        </div>
      </div>
    );
  };

export default OrderDetailsModal