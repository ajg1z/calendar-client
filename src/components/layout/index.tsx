import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { StyledEngineProvider } from "@mui/material/styles";
import { Container, Main } from "./index.styled";
export const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
	return (
		<Container>
			<StyledEngineProvider injectFirst>
				<Header />
				<Main>{props.children}</Main>
				<Footer />
			</StyledEngineProvider>
		</Container>
	);
};
