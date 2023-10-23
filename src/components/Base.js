import React from "react";
import CustomNavbar from "./CustomNavbar";
import { CustomFooter } from "./CustomFooter";

const Base = ({title='Welcom to our blog app', children}) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      {
        children
      }
      <CustomFooter />
    </div>
  );
};

export default Base;