import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Larout/MainLayout";
import { DashBoard } from "../Pages/DashBoard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashBoard />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
