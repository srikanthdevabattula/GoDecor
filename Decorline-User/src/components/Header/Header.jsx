import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
const Header = () => {
	const [navbar,setnavbar]=useState(false)
	return (
		<header className="w-full h-[80px] sm:h-[auto] p-4 px-[5%] flex sm:flex-col items-center justify-center">
			<nav className="flex items-center justify-center space-x-[300px] lg:space-x-[150px] md:space-x-[80px] sm:space-x-3 sm:justify-between">
				
				<div className="flex items-center space-x-2"><img src={logo} alt="" className="w-[34px] h-[34px] lg:w-[27px] lg:h-[27px] md:h-[23px] md:w-[23px] sm:w-[17px] sm:h-[17px]" />
				<h1 className="font-DMSerif text-[#292F36] text-[40px] lg:text-[30px] md:text-[25px] sm:text-[16px]">GoDecor</h1>
				
				</div>
				<div className="sm:flex items-center space-x-2 w-[150px] hidden"><CiSearch />
					<input type="search" name="" id="" className="border-[1px] rounded-[10px] outline-none w-[130px] p-1 text-[15px]"/>
					
					</div>
					<BsList  onClick={()=>setnavbar(!navbar)} className="sm:flex hidden"/>
					


				<div className="flex items-center gap-6 lg:gap-5 md:gap-4 text-[20px] lg:text-[17px] md:text-[14px] sm:hidden text-[#292F36] font-Jost">
					<Link to="/">Home</Link>
					<Link to="/pages">Pages</Link>
					<Link to="/services">Services</Link>
					<Link to="/props">Props</Link>
					<Link to="/contactUs">Contact</Link>
					<div className="flex items-center space-x-2"><CiSearch />
					<input type="search" name="" id="" className="border-[1px] rounded-[10px] outline-none p-1 text-[15px]"/></div>
				</div>
				<Link to='/cart'><FiShoppingCart  className="text-[30px] md:text-[25px] sm:text-[17px]"/></Link>
			</nav>
			{navbar&&<div className="sm:flex items-center sm:gap-4 sm:text-[10px]  hidden text-[#292F36] font-Jost mt-4">
					<Link to="/">Home</Link>
					<Link to="/pages">Pages</Link>
					<Link to="/services">Services</Link>
					<Link to="/props">Props</Link>
					<Link to="/contactUs">Contact</Link>
			
				</div>}
		</header>
	);
};

export default Header;
