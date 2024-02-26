import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { DesignsActions, DesignsSelector } from '../../../redux/reducers/Designs';
const Search = () => {
    const designs=useSelector(DesignsSelector)
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');


    const handleViewDesigns = (design) => {
      
       dispatch(DesignsActions.setView(true))
        dispatch(DesignsActions.viewDesign(design));
     };

    useEffect(() => {
        
        dispatch(DesignsActions.setAddDesign(null));
      }, []);

    const filteredDesigns = searchQuery
    ? designs.filter(design => design.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : designs;


  return (
    <div className='font-poppins'>
    <div className='border-b-[1px] border-[#D5D5D5] h-[62px] sm:h-[100px] flex sm:flex-wrap items-center space-x-3 sm:space-x-0 px-2'>
      <div className='w-[60%] sm:w-[100%] border-[1.5px] border-[#02302066] rounded-[8px] flex items-center'>
        <input
          type="search"
          name=""
          id=""
          placeholder='Search'
          className='w-[90%] outline-none border-[0px] rounded-[8px] mr-1'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IoSearchOutline />
      </div>
      <button className='bg-[#023020] p-3 sm:p-1 w-[40%] sm:w-[100%] text-[13px] sm:text-[11px] text-[white] font-semibold rounded-[8px] sm:h-[30px]' onClick={() => {dispatch(DesignsActions.setAddDesign(true)) }}>Add New Design</button>
    </div>
    

    <div className='overflow-y-auto scrollbar-hide h-[70vh]'>
        {filteredDesigns.map((design, index) => (
          <div
            className='p-4 border-b-[1px] my-1'
            key={index}
            onClick={() => handleViewDesigns(design)}
          >
            <div className='flex items-center text-[#000000] text-[11px] sm:text-[9px] justify-between w-[100%] '>
              <div className='flex  space-x-4 sm:space-x-2 w-[100%] '>
                <img src={design.img} alt="" className='rounded-[8px] sm:w-[30%]' />
                <div className='w-[100%] space-y-3 text-[11px]'>
                    <div className=' flex justify-between  w-[100%] '>
                  <h4 className=' font-medium'>{design.name}</h4>
                  <h4 className='font-semibold'>₹ {design.price}</h4>
                  </div>
                  <p>{design.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search