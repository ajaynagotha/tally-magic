import { Button } from "@mui/material";
import * as React from "react";

export const CompanyList = ({ companies }) => {
  return (
    <table class="table-fixed w-full">
      <thead>
        <tr className="border">
          <th className="text-left p-2" style={{ width: "80px" }}>
            Sr. No.
          </th>
          <th className="text-left p-2" style={{ width: "80%" }}>
            Name
          </th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((cmp, index) => {
          return (
            <tr key={index} className="border">
              <td className="text-left p-2">{index + 1}</td>
              <td className="text-left p-2">{cmp.$.NAME}</td>
              <td className="text-center p-2">
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
