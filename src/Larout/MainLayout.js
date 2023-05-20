import * as React from "react";
import { Outlet } from "react-router-dom";
import { MainSideBar } from "../components/MainSideBar";
import { MainHeader } from "./MainHeader";

export const MainLayout = () => {
  return (
    <div className="main">
      <div className="grid grid-cols-10">
        <MainSideBar />
        <div className="col-span-9">
          <div className="flex flex-col">
            <MainHeader />
            <div className="p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
