import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PricingAndPlan from "../Pages/PricingAndPlan/PricingAndPlan";
import Faq from "../Pages/FAQ/Faq";
import Props from "../Pages/Props/Props";

import ProductDetails from "../Pages/SingleProp/SingleProp";

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
				path="/"
				element={<MainLayout></MainLayout>}
			>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/contactUs"
					element={<ContactUs />}
				/>
				<Route 
				path='/pricing'
				element={<PricingAndPlan/>}
				/>
					<Route 
				path='/faq'
				element={<Faq/>}
				/>
				<Route 
				path='/props'
				element={<Props/>}
				/>
				<Route
				path='/productDetails/:id'
				element={<ProductDetails/>}
				/>
			</Route>
		</Routes>
	);
};

export default Routers;
