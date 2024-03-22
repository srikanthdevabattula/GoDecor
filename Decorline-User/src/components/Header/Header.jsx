import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
const Header = () => {
	const [navbar,setnavbar]=useState(false)
	return (
		<header className="w-full h-[80px] sm:h-[auto] p-4 px-[5%] sm:px-[3%] flex sm:flex-col items-center justify-center">
			<nav className="flex items-center justify-center  space-x-[200px] lg:space-x-[100px] md:space-x-[50px] sm:space-x-3 sm:justify-between">
				
				<Link to='/'><div className="flex items-center space-x-2 sm:space-x-1"><img src={logo} alt="" className="w-[34px] h-[34px] lg:w-[27px] lg:h-[27px] md:h-[23px] md:w-[23px] sm:w-[15px] sm:h-[15px]" />
				<h1 className="font-DMSerif text-[#292F36] text-[40px] lg:text-[30px] md:text-[25px] sm:text-[14px]">GoDecor</h1>
				
				</div></Link>
				<div className="sm:flex items-center space-x-2 w-[150px] hidden"><CiSearch />
					<input type="search" name="" id="" className="border-[1px] rounded-[10px] outline-none w-[130px] sm:w-[100px] sm:h-[30px] p-1 text-[15px]"/>
					
					</div>
					


				<div className="flex items-center gap-6 lg:gap-5 md:gap-4 text-[20px] lg:text-[17px] md:text-[14px] sm:hidden text-[#292F36] font-Jost">
					<Link to="/">Home</Link>
					
					<Link to="/services">Services</Link>
					<Link to="/props">Props</Link>
					<Link to="/contactUs">Contact</Link>
					<Link to="/orders">Orders</Link>
					<div className="flex items-center space-x-2">
					<input type="search" name="" id="" className="border-[1px] rounded-[10px] outline-none p-1 text-[13px]"/></div>
					<CiSearch /></div>
				<div className="flex space-x-4">
				<Link to='/wishlist'><AiFillHeart className="text-[23px] md:text-[20px] sm:text-[15px] p-[3px] md:p-[2px] border-[1px] rounded-[100px] text-[red]"/></Link>
				<Link to='/cart'><FiShoppingCart  className="text-[30px] md:text-[25px] sm:text-[17px]"/></Link>
				<BsList  onClick={()=>setnavbar(!navbar)} className="sm:flex hidden"/>
					</div></nav>
			{navbar&&<div className="sm:flex items-center sm:gap-4 sm:text-[10px]  hidden text-[#292F36] font-Jost mt-4">
					<Link to="/">Home</Link>
					<Link to="/services">Services</Link>
					<Link to="/props">Props</Link>
					<Link to="/contactUs">Contact</Link>
					<Link to="/pages">orders</Link>
			
				</div>}
		</header>
	);
};

export default Header;
