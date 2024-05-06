import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductsActions } from '../../../redux/reducers/Products';
import { CiCircleRemove } from "react-icons/ci";
import Cookies from 'js-cookie';

const AddProductModal = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    Stock: '',
    dimension: { length: '', height: '', breath: '' },
    category: 'bathroom',
    images: []
  });

  useEffect(() => {
    if (!files || files.length === 0) return;

    const objectUrls = files.map(file => URL.createObjectURL(file));
    setPreviews(objectUrls);

    // Clean up object URLs when component unmounts or files change
    return () => {
      objectUrls.forEach(URL.revokeObjectURL);
    };
  }, [files]);

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles([...files, ...selectedFiles]);

      // Generate image URLs for each file
      const imageUrls = await Promise.all(selectedFiles.map(uploadImage));
      
      // Update images array in formData with the generated URLs
      setFormData(prevState => ({
        ...prevState,
        images: [...prevState.images, ...imageUrls]
      }));
    }
  };

  const uploadImage = async (file) => {
    try {
      const response = await fetch('https://go-decor.vercel.app/api/v1/storage/getUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'productId',
          extension: file.name.split('.').pop()
        })
      });

      if (response.ok) {
        const { url } = await response.json();
        return url;
      } else {
        throw new Error('Failed to generate image URL');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error (maybe show an error message to the user)
      return null;
    }
  };

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
  
    const updatedImages = formData.images.filter((_, index) => index !== indexToRemove);
    setFormData(prevState => ({
      ...prevState,
      images: updatedImages
    }));
  
    setPreviews(previews.filter((_, index) => index !== indexToRemove));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('dimension')) {
      const dimensionKey = name.split('.')[1];
      setFormData(prevState => ({
        ...formData,
        dimension: {
          ...formData.dimension,
          [dimensionKey]: value
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const token = Cookies.get('token');

      const response = await fetch('https://go-decor.vercel.app/api/v1/product/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData
        })
      });

      if (response.ok) {
        dispatch(ProductsActions.setAddproduct(false))
        console.log(formData)
        // Reset form after successful submission
        setFormData({
          name: '',
          description: '',
          price: '',
          Stock: '',
          dimension: { length: '', height: '', breath: '' },
          category: 'bathroom',
          images: []
        });
        setFiles([]);
        alert('Product added successfully!');
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="modal-container font-poppins">
      <div className="modal scrollbar-hide">
        <div className="modal-content">
          <span className="close" onClick={() => dispatch(ProductsActions.setAddproduct(false))}>&times;</span>
          <h2 className='text-[13px] font-medium'>Add Product</h2>
          <form onSubmit={handleSubmit}>
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
              <input type="text" name="name" value={formData.name} onChange={handleChange} className='h-[20px] text-[12px] w-[100%] border-none' />
            </div>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <input type="number" name="price" placeholder='Price' value={formData.price} onChange={handleChange} className='w-[100%] text-[12px] border-none' />
            </div>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] pb-3 my-3 '>
              <h3 className='relative top-[-9px] text-[#7F7F7F] bg-[white] w-[170px] h-[9px] text-[10px] left-[10px] px-1'>Dimensions (inches) (L X B X H)</h3>
              <div className='px-5 flex items-center justify-between'>
                <input type="number" name="dimension.length" value={formData.dimension.length} onChange={handleChange} className='h-[20px] text-[12px] w-[55px] rounded-[8px]' />
                <h1 className='text-[13px]'>x</h1>
                <input type="number" name="dimension.height" value={formData.dimension.height} onChange={handleChange} className='h-[20px] text-[12px] w-[55px] rounded-[8px]' />
                <h1 className='text-[13px]'>x</h1>
                <input type="number" name="dimension.breath" value={formData.dimension.breath} onChange={handleChange} className='h-[20px] text-[12px] w-[55px] rounded-[8px]' />
              </div>
            </div>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <select name="category" value={formData.category} onChange={handleChange} className='w-[100%] text-[12px] border-none'>
                <option value="">Select Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
                <option value="living area">Living Area</option>
                <option value="bed room">Bedroom</option>
              </select>
            </div>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <input type="number" name="Stock" placeholder='Stock' value={formData.Stock} onChange={handleChange} className='w-[100%] text-[12px] border-none' />
            </div>
            <div className='border-[1px] border-[#BEBEBE] rounded-[8px] p-1 my-3 '>
              <textarea name="description" placeholder='Description' value={formData.description} onChange={handleChange} className='text-[11px] w-[100%] h-[100px] border-none'></textarea>
            </div>
            <button type="submit" className='w-[100%] text-center bg-[#023020] text-[white] font-medium rounded-[8px] p-2'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
