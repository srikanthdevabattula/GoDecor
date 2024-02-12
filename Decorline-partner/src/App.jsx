import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import Loader from "./Pages/Loader/Loader";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	// Let create async method to fetch fake data
	useEffect(() => {
	  const fakeDataFetch = () => {
		setTimeout(() => {
		  setIsLoading(false);
		}, 4000);
	  };
  
	  fakeDataFetch();
	}, []);
  
	return  isLoading ? (
		<Loader />
	  ) : (
		<div>
			<Provider store={store}>
		<BrowserRouter>
			<Routers />
		</BrowserRouter>
		</Provider>
		</div>
	);
}

export default App;
