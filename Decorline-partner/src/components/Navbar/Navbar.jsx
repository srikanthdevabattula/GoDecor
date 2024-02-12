import React from 'react'
import { useSelector } from 'react-redux';
import { pathSelector, sidebarSelector } from '../../redux/reducers/sidebar';
import profile from '../../assets/profile/Avatar Style 6.png'
const Navbar = () => {
    const sideBar=useSelector(sidebarSelector);
    const pagePath=useSelector(pathSelector)
    
  return (
    <div className='p-[2%] flex justify-between items-center '>
    <div className='space-y-2'>
<p className='text-[#707EAE] font-poppins font-light sm:font-normal text-[12px] md:text-[10px] sm:text-[8px]'>{pagePath}</p>
<h1 className='font-poppins font-medium text-[24px] md:text-[20px] sm:text-[14px]'>{sideBar}</h1>
</div>
<img src={profile} alt="" />
</div>
  )
}

export default Navbar