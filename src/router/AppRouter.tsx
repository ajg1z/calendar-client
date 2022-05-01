import React from "react";
import { useTypesSelector } from "../hooks/useTypedSelector";
import { Routes, Route, Navigate } from "react-router-dom";
import { RouteNames, publicRoutes, privateRoutes } from "./index";

export const AppRouter = () => {
  const auth = useTypesSelector((state) => state.auth);

  return (
    <Routes>
      {auth &&
        privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}

      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};
