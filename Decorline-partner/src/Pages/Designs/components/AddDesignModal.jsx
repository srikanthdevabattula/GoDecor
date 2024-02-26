import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { DesignsActions } from '../../../redux/reducers/Designs';

const AddDesignModal = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [productsUsed, setProductsUsed] = useState([{ name: '', price: '' }]);

  useEffect(() => {
    if (!files || files.length === 0) return;

    const objectUrls = files.map(file => URL.createObjectURL(file));
    setPreviews(objectUrls);

    // Clean up object URLs when component unmounts or files change
    return () => {
      objectUrls.forEach(URL.revokeObjectURL);
    };
  }, [files]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    setPreviews(previews.filter((_, index) => index !== indexToRemove));
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
          <span className="close" onClick={() => dispatch(DesignsActions.setAddDesign(false))}>&times;</span>
          <h2 className='text-[13px] font-medium'>Add Product</h2>
          <form onSubmit={addProduct}>
            <div className='flex flex-wrap space-x-2'>
              <div className='w-[100%]'> <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                multiple
                onChange={handleFileChange}
                className='mt-3 w-[100%] outline-none text-[9px]  text-transparent bg-transparent'
              /></div>

              {previews.map((pic, index) => (
                <div key={index} className="X">
                  <div className='text-center my-2'>
                    <img src={pic} className="w-[70px] sm:w-[50px]" alt={`Preview ${index}`} />
                    <button onClick={() => removeFile(index)}><CiCircleRemove /></button>
                  </div> </div>
              ))}
            </div>
            <p className='text-[#49454F] font-Roboto text-[12px] sm:text-[9px]'>Image format should be png, jpg, jpeg</p>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
              <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[80px] h-[9px] text-[10px] left-[10px] px-1'>Product Name</h3>
              <input type="text" name="name" id="" className='h-[20px] text-[12px] w-[100%] border-none'/>
            </div>

            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <input type="number" placeholder='Price' className='w-[100%] text-[12px] border-none' />
            </div>

            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
              <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[130px] h-[9px] text-[10px] left-[10px] px-1'>Room Dimensions (feet)</h3>
              <div className='px-[25%] flex items-center justify-between'>
                <input type="text" name="dimension1" id="" className='h-[20px] text-[12px] w-[55px] rounded-[8px]'/>
                <h1 className='text-[13px]'>x</h1>
                <input type="text" name="dimension2" id="" className='h-[20px] text-[12px] w-[55px] rounded-[8px]'/>
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
              <textarea name="" id="" placeholder='Description' className='text-[11px] w-[100%] h-[100px] border-none'></textarea> </div>
            <button className='w-[100%] text-center bg-[#023020] text-[white] font-medium rounded-[8px] p-2'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDesignModal;
