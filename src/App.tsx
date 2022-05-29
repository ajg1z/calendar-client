import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/index";
import { AppRouter } from "./router/AppRouter";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "./hooks/useTypedSelector";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/theme";
import { AuthActionCreators } from "./store/reducers/auth/action-creators";
import { Loader } from "./components/loader/loader";
import { EventsActionCreator } from "./store/reducers/events/action-creators";

function App() {
	const dispatch = useDispatch();
	const { auth, isLoadingGlobal } = useTypesSelector((state) => state.auth);
	const { theme } = useTypesSelector((state) => state.setting);
	const { isModal } = useTypesSelector((state) => state.modal);
	React.useEffect(() => {
		if (isModal) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [isModal]);
	React.useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	React.useEffect(() => {
		if (sessionStorage.getItem("token") && !auth) {
			dispatch(AuthActionCreators.checkAuth());
		}
	}, []);

	React.useEffect(() => {
		if (auth) {
			dispatch(EventsActionCreator.GetEvents());
			dispatch(EventsActionCreator.FetchReceiveEvent());
		}
	}, [auth]);

	return isLoadingGlobal || (sessionStorage.getItem("token") && !auth) ? (
		<Loader />
	) : (
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
