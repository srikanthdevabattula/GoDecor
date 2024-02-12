import { Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Login from "../Pages/Authentication/Login/Login";
import NewuserIntro from "../Pages/Authentication/newUserIntro/NewuserIntro";
import Register from "../Pages/Authentication/Register/Register";
import Success from "../Pages/Authentication/Register/components/success";
import Consultations from "../Pages/Bookings/Consultations/Consultations";

import ProductsBookings from "../Pages/Bookings/Products/ProductsBookings";
import Products from "../Pages/Products/Products";
import Designs from "../Pages/Designs/Designs";
import DesignsBookings from "../Pages/Bookings/Designs/Designs";
import Earnings from "../Pages/Earnings/Earnings";
import Settings from "../Pages/Settings/Settings";
import Chat from "../Pages/Chat/Chat";

// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainLayout></MainLayout>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/aboutus",
// 				element: <AboutUs />,
// 			},
// 		],
// 	},
// ]);

const Routers = () => {
	return (
		<Routes>
			<Route 
			path="/Welcome"
			element={<NewuserIntro/>}
			/>

			<Route 
			path="/login"
			element={<Login/>}
			/>
			<Route 
			path="/register"
			element={<Register />}
			/>
				<Route
					path="/success"
					element={<Success />}
				/>

			<Route
				path="/"
				element={<MainLayout></MainLayout>}
			>
				<Route
					path="/"
					element={<Consultations />}
				/>
					<Route
					path="/DesignsBookings"
					element={<DesignsBookings />}
				/>
					<Route
					path="/ProductsBookings"
					element={<ProductsBookings />}
				/>
				<Route
					path="/Products"
					element={<Products />}
				/>
				<Route
					path="/Designs"
					element={<Designs />}
				/>
				<Route
					path="/Earnings"
					element={<Earnings />}
				/>
					<Route
					path="/Chat"
					element={<Chat />}
				/>
					<Route
					path="/Settings"
					element={<Settings />}
				/>
			
			</Route>
		</Routes>
	);
};

export default Routers;
