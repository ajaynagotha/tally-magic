// @flow
import { AccountBalance, Business, Payments } from "@mui/icons-material";
import * as React from "react";

export const MainSideBar = (props) => {
  return (
    <div className="w-full h-screen bg-[#1C2536]">
      <div className="flex flex-col items-center p-2">
        <Business fontSize="large" className="text-[#9DA4AE]"/>
        <div className="text-[#9DA4AE]">Company</div>
      </div>
      <div className="flex flex-col items-center p-2">
        <AccountBalance fontSize="large" className="text-[#9DA4AE]"/>
        <div className="text-[#9DA4AE]">Bank</div>
      </div>
      <div className="flex flex-col items-center p-2">
        <Payments fontSize="large" className="text-[#9DA4AE]"/>
        <div className="text-[#9DA4AE]">Transactions</div>
      </div>
    </div>
  );
};
