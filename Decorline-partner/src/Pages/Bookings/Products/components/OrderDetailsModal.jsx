import React from 'react'
import './detailsModal.css'

import { useDispatch } from 'react-redux';
import OrderDetails from './OrderDetails';
import { ProductBookingsActions } from '../../../../redux/reducers/ProductBookings';
const OrderDetailsModal = () => {
    const dispatch =useDispatch()
    return (
        <div className="modal-container  hidden md:flex">
        <div className="modal scrollbar-hide">
          <div className="modal-content">
            <span className="close"  onClick={() => {dispatch(ProductBookingsActions.setProductDetails(false))}}>&times;</span>
            <h2>Order Details</h2>
           <OrderDetails/>

            {/* Add other order details */}
          </div>
        </div>
      </div>
    );
  };

export default OrderDetailsModal