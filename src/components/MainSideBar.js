// @flow
import {
  AccountBalance,
  Business,
  DesktopMac,
  Payments,
} from "@mui/icons-material";
import * as React from "react";
import { colors } from "../theme/colors";
import { Link } from "react-router-dom";

export const MainSideBar = (props) => {
  return (
    <div className={`w-full h-screen ${colors.bgPrimary}`}>
      <Link to="/">
        <div className="flex flex-col items-center p-2">
          <DesktopMac fontSize="large" className={colors.txtPrimary} />
          <div className={colors.txtPrimary}>Dashboard</div>
        </div>
      </Link>
      <Link to="/companies">
        <div className="flex flex-col items-center p-2">
          <Business fontSize="large" className={colors.txtPrimary} />
          <div className={colors.txtPrimary}>Company</div>
        </div>
      </Link>
      <div className="flex flex-col items-center p-2">
        <AccountBalance fontSize="large" className={colors.txtPrimary} />
        <div className={colors.txtPrimary}>Banking</div>
      </div>
      <div className="flex flex-col items-center p-2">
        <Payments fontSize="large" className={colors.txtPrimary} />
        <div className={colors.txtPrimary}>Transactions</div>
      </div>
    </div>
  );
};
