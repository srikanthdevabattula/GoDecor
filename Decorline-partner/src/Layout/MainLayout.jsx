import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Cookies from "js-cookie";
const MainLayout = () => {
	const token = Cookies.get('token');
    if (!token) {
        return <Navigate to='/login' />;
    }
	return (
		<main className="flex ">
			<Header />
			<div className="w-[100%] h-[95vh]   bg-[#FAFAFA]">
				<Navbar/>
				<div className="h-[90%] overflow-y-auto scrollbar-hide">
			<Outlet />
			</div>
			</div>
			
		</main>
	);
};

export default MainLayout;
