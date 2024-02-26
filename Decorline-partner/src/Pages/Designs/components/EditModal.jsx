import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiCircleRemove } from "react-icons/ci";
import { DesignsActions, viewDesignSelector } from '../../../redux/reducers/Designs';
import { MdOutlineDeleteForever } from "react-icons/md";

const EditModal = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector(viewDesignSelector);

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState(orderDetails.images); // Assuming this is the correct field name for images
  const [productName, setProductName] = useState(orderDetails.name);
  const [productCost, setProductCost] = useState(orderDetails.price);
  const [productsUsed, setProductsUsed] = useState([{ name: '', price: '' }]);
 
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
  const handleProductNameChange = (index, value) => {
    const updatedProducts = [...productsUsed];
    updatedProducts[index].name = value;
    setProductsUsed(updatedProducts);
  };

  const handleProductPriceChange = (index, value) => {
    const updatedProducts = [...productsUsed];
    updatedProducts[index].price = value;
    setProductsUsed(updatedProducts);
  };

  const addProduct = (e) => {
    e.preventDefault();
    setProductsUsed([...productsUsed, { name: '', price: '' }]);
  };

  const removeProduct = (indexToRemove) => {
    const updatedProducts = productsUsed.filter((_, index) => index !== indexToRemove);
    setProductsUsed(updatedProducts);
  };

  return (
    <div className="modal-container font-poppins">
      <div className="modal scrollbar-hide">
        <div className="modal-content">
          <span className="close" onClick={() => dispatch(DesignsActions.setEditDesign(false))}>&times;</span>
          <h2 className='text-[13px] font-medium'>Edit Product</h2>
          <form onSubmit={addProduct}>
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
              <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[110px] h-[9px] text-[10px] left-[10px] px-1'>Dimensions (feet)</h3>
              <div className='px-[25%] flex items-center justify-between'>
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
                
              </div>
            </div>

            <h1 className='text-[#1C1C1C] font-medium text-[13px] my-3'>Products used</h1>
            {productsUsed.map((product, index) => (
              <div key={index}>
                <div className='flex items-center justify-between'><h1 className='text-[11px] font-medium text-[#1C1C1C]'>Product {index + 1}</h1> 
                    <button className='text-[red]' onClick={() => removeProduct(index)}><MdOutlineDeleteForever /></button>
              </div>
                <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
                  <input
                    type="text"
                    placeholder='Product Name'
                    className='w-[100%] text-[12px] border-none'
                    value={product.name}
                    onChange={(e) => handleProductNameChange(index, e.target.value)}
                  />
                </div>

                <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
                  <input
                    type="number"
                    placeholder='Price'
                    className='w-[100%] text-[12px] border-none'
                    value={product.price}
                    onChange={(e) => handleProductPriceChange(index, e.target.value)}
                  />
                </div>
            </div>
            ))}
            <button type="submit" className='w-[100%] text-center bg-[#023020] text-[white] font-medium rounded-[8px] p-2'>Add Product</button>

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
