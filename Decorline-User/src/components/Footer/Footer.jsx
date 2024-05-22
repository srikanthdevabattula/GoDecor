import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
	return (
		<footer className="w-full flex justify-between px-[10%] md:px-[5%] sm:px-[3%] py-[40px]">
			<div className='w-[30%] esm:w-[25%] space-y-4'>
				<div className="flex items-center space-x-2 sm:space-x-1"><img src={logo} alt="" className="w-[34px] h-[24px] lg:w-[20px] lg:h-[20px] sm:w-[15px] sm:h-[15px] " />
				<h1 className="font-DMSerif text-[#292F36] text-[30px] lg:text-[20px] md:text-[17px] sm:text-[12px]">GoDecor</h1></div>

				<p className='font-Jost text-[20px] lg:text-[17px] md:text-[14px] sm:text-[9px] text-[#4D5053]'>It is a long established fact that a reader will be distracted lookings.</p>
				
				<div className='flex items-center gap-8 md:gap-4 sm:gap-3 sm:text-[10px] mt-5'> 
					<Link><FaFacebookF /></Link>
					<Link><FaTwitter /></Link>
					<Link><GrLinkedinOption /></Link>
					<Link><IoLogoInstagram /></Link>
				</div>
				
				</div>

			<div className='space-y-4'>
				<h1 className='text-[25px] lg:text-[20px] md:text-[17px] sm:text-[12px] text-[#292F36] font-DMSerif'>Pages</h1>
				
				<div className='text-[22px] lg:text-[18px] md:text-[15px] sm:text-[9px] font-Jost text-[#4D5053] space-y-4 flex flex-col'>
					<Link>About Us</Link>
				<Link>Our Projects</Link>
				<Link>Our Team</Link>
				<Link to='contactus'>Contact Us</Link>
				<Link to='/services'>Services</Link>
				<Link to='/faqs'>FAQ'S</Link>
				</div>
				
				</div>

				<div className='space-y-4'>
				<h1 className='text-[25px] lg:text-[20px] md:text-[17px] sm:text-[12px] text-[#292F36] font-DMSerif'>Services</h1>
				
				<div className='text-[22px] lg:text-[18px] md:text-[15px] sm:text-[9px] font-Jost text-[#4D5053] space-y-4 flex flex-col'>
					<Link>Kitchan</Link>
				<Link>Our Living Area</Link>
				<Link>Bathroom</Link>
				<Link>Dinning Hall</Link>
				<Link>Bedroom</Link>
				</div>
				
				</div>


				<div className='space-y-4 w-[25%] '>
				<h1 className='text-[25px] lg:text-[20px] md:text-[17px] sm:text-[12px] text-[#292F36] font-DMSerif'>Contact</h1>
				
				<div className='text-[22px] lg:text-[18px] md:text-[15px] sm:text-[9px] font-Jost text-[#4D5053] space-y-4 flex flex-col'>
					<p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
					<p>contact@interno.com</p>
					<p>(123) 456 - 7890</p>
				</div>
				
				</div>
		</footer>
	);
};

export default Footer;
