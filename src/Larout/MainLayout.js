import * as React from "react";
import { Outlet } from "react-router-dom";
import { MainSideBar } from "../components/MainSideBar";

export const MainLayout = () => {
  return (
    <div className="main">
      <div className="grid grid-cols-10 gap-4">
        <MainSideBar />
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
