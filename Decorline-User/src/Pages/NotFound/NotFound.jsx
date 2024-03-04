import React from 'react'
import notfound from '../../assets/notfound.jpg'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='p-[6%] flex flex-col items-center justify-center'><img src={notfound} alt="" className='w-[400px]'/>
    <Link to='/'><button className='p-[10px_30px] text-[white] font-poppins font-semibold rounded-[10px] bg-[#3573d6]'>Home</button></Link></div>
  )
}

export default NotFound