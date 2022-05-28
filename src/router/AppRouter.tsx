import React from "react";
import { useTypesSelector } from "../hooks/useTypedSelector";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { RouteNames, publicRoutes, privateRoutes } from "./index";
import { animated, useTransition } from "react-spring";

export const AppRouter = () => {
	
	const { auth } = useTypesSelector((state) => state.auth);
	const location = useLocation();
	const transition = useTransition(location, {
		from: { opacity: 0 },
		leave: { opacity: 0 },
		enter: { opacity: 1 },
		config: { duration: 200 },
		exitBeforeEnter: true,
	});
	return transition((style, item) => {
		return (
			<animated.div style={style}>
				<Routes location={item}>
					{auth
						? privateRoutes.map((route) => (
								<Route
									key={route.path}
									path={route.path}
									element={<route.component />}
								/>
						  ))
						: publicRoutes.map((route) => (
								<Route
									key={route.path}
									path={route.path}
									element={<route.component />}
								/>
						  ))}
					{!auth && (
						<Route
							path="*"
							element={<Navigate to={RouteNames.LOGIN} replace={true} />}
						/>
					)}
				</Routes>
			</animated.div>
		);
	});
};
