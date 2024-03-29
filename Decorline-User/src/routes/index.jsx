import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Faq from "../Pages/FAQ/Faq";
import Props from "../Pages/Props/Props";

import ProductDetails from "../Pages/SingleProp/SingleProp";
import Cart from "../Pages/cart/Cart";
import NotFound from "../Pages/NotFound/NotFound";
import Services from "../Pages/services/Services";
import Checkout from "../Pages/Checkout/Checkout";

import BookConsultation from "../Pages/BookConsultation/BookConsultation";
import Login from "../Pages/Authentication/Login";
import OrderDetails from "../Pages/Orders/Order";
import AllOrders from "../Pages/AllOrders/AllOrders";
import Wishlist from "../Pages/Wishlist/Wishlist";

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
			path="/login"
			element={<Login/>}
			/>
				<Route
					path="/contactUs"
					element={<ContactUs />}
				/>
				
					<Route 
				path='/faqs'
				element={<Faq />}
				/>
				<Route 
				path='/props'
				element={<Props />}
				/>
				<Route
    path='/productDetails/:_id'
    element={<ProductDetails />}
/>
				<Route 
				path='/cart'
				element={<Cart />}
				/>
				<Route 
				path='/services'
				element={<Services />}
				/>
				<Route 
				path='/wishlist'
				element={<Wishlist />}
				/>
				<Route 
				path='/checkout'
				element={<Checkout />}
				/>
				<Route
				path='/orders'
				element={<AllOrders />}
				/>
				<Route 
				path='/orderDetails'
				element={<OrderDetails />}
				/>
				<Route 
				path='/bookConsultation'
				element={<BookConsultation />}
				/>
				 <Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default Routers;
