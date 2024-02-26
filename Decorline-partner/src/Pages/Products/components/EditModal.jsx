import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions, ViewProductSelector } from '../../../redux/reducers/Products';
import { CiCircleRemove } from "react-icons/ci";

const EditModal = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector(ViewProductSelector);

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState(orderDetails.images); // Assuming this is the correct field name for images
  const [productName, setProductName] = useState(orderDetails.name);
  const [productCost, setProductCost] = useState(orderDetails.cost);
  const [productStock, setProductStock] = useState(orderDetails.stock);
  const [productDescription, setProductDescription] = useState(orderDetails.description);

  useEffect(() => {
    // Set previews if they are not already set
    if (!previews || previews.length === 0) {
      setPreviews(orderDetails.images);
    }
  }, [previews, orderDetails.images]);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const selectedPreviews = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      selectedPreviews.push(URL.createObjectURL(file));
    }

    setFiles([...files, ...Array.from(selectedFiles)]);
    setPreviews([...previews, ...selectedPreviews]);
  };

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    const updatedPreviews = previews.filter((_, index) => index !== indexToRemove);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
  };

  return (
    <div className="modal-container font-poppins">
      <div className="modal scrollbar-hide">
        <div className="modal-content">
          <span className="close" onClick={() => dispatch(ProductsActions.setEditModal(false))}>&times;</span>
          <h2 className='text-[13px] font-medium'>Edit Product</h2>
          <form action="none">
            <div className='flex flex-wrap space-x-2'>
              <div className=' w-[100%]  '>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  multiple
                  onChange={handleFileChange}
                  className='mt-3 w-[100%] outline-none text-[9px]  text-transparent bg-transparent'
                />
              </div>
              
              {previews.map((pic, index) => (
                <div key={index} className=" X">
                  <div className='text-center my-2'>
                    <img src={pic} className="w-[70px] sm:w-[50px]" alt={`Preview ${index}`} />
                    <button onClick={() => removeFile(index)}><CiCircleRemove /></button>
                  </div>
                </div>
              ))}
            </div>
            <p className='text-[#49454F] font-Roboto text-[12px] sm:text-[9px]'>Image format should be png, jpg, jpeg</p>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
              <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[80px] h-[9px] text-[10px] left-[10px] px-1'>Product Name</h3>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                name="name"
                id=""
                className='h-[20px] text-[12px] w-[100%] border-none'
              />
            </div>

            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <input
                type="number"
                value={productCost}
                onChange={(e) => setProductCost(e.target.value)}
                placeholder='Price'
                className='w-[100%] text-[12px] border-none'
              />
            </div>

            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
              <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[170px] h-[9px] text-[10px] left-[10px] px-1'>Dimensions (inches) (L X B X H)</h3>
              <div className='px-5 flex items-center justify-between'>
                <input
                  type="text"
                  value={70}
                  name="dimension1"
                  id=""
                  className='h-[20px] text-[12px] w-[45px] rounded-[8px]'
                />
                <h1 className='text-[13px]'>x</h1>
                <input
                  type="text"
                  value={80}
                  name="dimension2"
                  id=""
                  className='h-[20px] text-[12px] w-[45px] rounded-[8px]'
                />
                <h1 className='text-[13px]'>x</h1>
                <input
                  type="text"
                  name="dimension3"
                  value={30}
                  id=""
                  className='h-[20px] text-[12px] w-[45px] rounded-[8px]'
                />
              </div>
            </div>

            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <input
                type="number"
                placeholder='Stock'
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                className='w-[100%] text-[12px] border-none'
              />
            </div>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <textarea
                name=""
                id=""
                placeholder='Description'
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className='text-[11px] w-[100%] h-[100px] border-none scrollbar-hide'
              />
            </div>
            <button className='w-[100%] text-center bg-[#023020] text-[white] font-medium rounded-[8px] p-2'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
