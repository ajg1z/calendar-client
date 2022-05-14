import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/index";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { useTypesSelector } from "./hooks/useTypedSelector";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/theme";

function App() {
	const { theme } = useTypesSelector((state) => state.setting);
	React.useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	return (
		<BrowserRouter>
			<ThemeProvider theme={() => Theme(theme)}>
				<Layout>
					<AppRouter />
				</Layout>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
