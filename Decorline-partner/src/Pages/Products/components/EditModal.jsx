// EditModal.js

import React from 'react';
import { useDispatch } from 'react-redux';

import { ProductsActions } from '../../../redux/reducers/Products';

const EditModal = () => {
    const dispatch = useDispatch();
   

    return (
        <div className="modal-container  ">
        <div className="modal scrollbar-hide">
          <div className="modal-content">
            <span className="close"  
            onClick={() => {dispatch(ProductsActions.setEditModal(false))}}
            >&times;</span>
            <h2>Edit Product</h2>
         


         <div>
            <p>hello </p>
         </div>

            {/* Add other order details */}
          </div>
        </div>
      </div>
    );
};

export default EditModal;
