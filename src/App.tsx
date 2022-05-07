import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/index";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Provider store={store}>
					<AppRouter />
				</Provider>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
