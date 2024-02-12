import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductsActions } from '../../../redux/reducers/Products';

const AddProductModal = () => {
    const dispatch = useDispatch();
   

    return (
        <div className="modal-container  ">
        <div className="modal scrollbar-hide">
          <div className="modal-content">
            <span className="close"  
            onClick={() => {dispatch(ProductsActions.setAddproduct(false))}}
            >&times;</span>
            <h2>Edit Product</h2>



         <div>
            <p>Add Product </p>
         </div>

            {/* Add other order details */}
          </div>
        </div>
      </div>
  )
}

export default AddProductModal