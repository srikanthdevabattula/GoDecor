import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import {  useSelector } from "react-redux";
import {  sidebarSelector } from "../../redux/reducers/sidebar";
import { BsHddRack } from "react-icons/bs";
import { BsFillHddRackFill } from "react-icons/bs";
import { GiResize } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
const Header = () => {
	const pages=useSelector(sidebarSelector)
	
	return (
		<header className="w-[238px] lg:w-[200px] md:w-[170px] sm:w-[120px] h-[100vh] items-center justify-center bg-[#FFFFFF] border-[0.5px] border-[#ECECEC] overflow-y-auto scrollbar-hide" style={{boxShadow: '0px 4px 15px 0px #0000001C'
		}}>
			<nav className="flex items-center justify-center space-x-2   flex-col">
				<h1 className="font-poppins font-bold text-[20px] text-center my-6">Logo</h1>
				<div className="w-[100%] pl-[8%] pr-[5%] mt-6  flex flex-col space-y-6">
					<div>
						<div className="flex items-center space-x-2 sm:space-x-1 mb-3">
						{pages === 'Consultation Bookings' || pages === 'Design Bookings' || pages === 'Product Orders'  ?<FaClock className="text-[#023020]"/> :<GoClock className="text-[#98A3B3] sm:w-[12px]"/>}
							<h1 className={pages === 'Consultation Bookings' || pages === 'Design Bookings' || pages === 'Product Orders'  ? 'text-[#023020] font-poppins font-medium text-[16px] lg:text-[15px] md:text-[13px] sm:text-[11px] border-r-[3px] border-[#023020] w-[100%]' : 'text-[#98A3B3] font-poppins font-medium text-[16px] lg:text-[15px] md:text-[13px] sm:text-[11px]'}>Bookings</h1>

						</div>
						<div className="flex flex-col space-y-3 pl-[15%]">
							<Link to='/' className={pages === 'Consultation Bookings' ? 'text-[#023020]  font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]' : 'text-[#98A3B3]  font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >Consultations</Link>
							<Link to='/DesignsBookings' className={pages === 'Design Bookings' ? 'text-[#023020]  font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]' : 'text-[#98A3B3]  font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >Designs</Link>
							<Link to='/ProductsBookings' className={pages === 'Product Orders' ? 'text-[#023020] font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]' : 'text-[#98A3B3] font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >Products</Link>
							</div>
					</div>
					<Link to="/Products" className={pages === 'Products' ? 'text-[#023020] flex items-center space-x-2   font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]  border-r-[3px] border-[#023020] w-[100%]' : 'text-[#98A3B3] flex items-center space-x-2  font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >
					{pages === 'Products'  ?<BsFillHddRackFill className="text-[#023020]"/> :<BsHddRack className="text-[#98A3B3]"/>}
						<h1>Products</h1></Link>
					<Link to="/Designs" className={pages === 'Designs' ? 'text-[#023020] flex items-center space-x-2  font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]  border-r-[3px] border-[#023020] w-[100%]' : 'text-[#98A3B3] flex items-center space-x-2 font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >
					{pages === 'Designs'  ?<GiResize className="text-[#023020]"/> :<GiResize className="text-[#98A3B3]"/>}
						<h1>Designs</h1></Link>
					<Link to="/Earnings" className={pages === 'Earnings' ? 'text-[#023020] flex items-center space-x-2 font-poppins text-[14px]  lg:text-[13px] md:text-[11px] sm:text-[9px]  border-r-[3px] border-[#023020] w-[100%]' : 'text-[#98A3B3] flex items-center space-x-2 font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >
					{pages === 'Earnings'  ?<IoWallet className="text-[#023020]"/> :<IoWalletOutline className="text-[#98A3B3]"/>}
						<h1>Earnings</h1></Link>
					<Link to="/Chat" className={pages === 'Chat' ? 'text-[#023020] flex items-center space-x-2 font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]  border-r-[3px] border-[#023020] w-[100%]' : 'text-[#98A3B3] flex items-center space-x-2 font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >
					{pages === 'Chat'  ?<IoChatbubbleEllipses className="text-[#023020]"/> :<IoChatbubbleEllipsesOutline className="text-[#98A3B3]"/>}
						<h1>Chat</h1></Link>
					<Link to="/Settings" className={pages === 'Settings' ? 'text-[#023020] flex items-center space-x-2 font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]  border-r-[3px] border-[#023020] w-[100%]' : 'text-[#98A3B3] flex items-center space-x-2 font-poppins text-[14px] lg:text-[13px] md:text-[11px] sm:text-[9px]'} >
					{pages === 'Settings'  ?<IoSettings className="text-[#023020]"/> :<IoSettingsOutline className="text-[#98A3B3]"/>}
						<h1>Settings</h1></Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
