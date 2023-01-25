import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./include/Footer";
import Navbar from "./include/Navbar";

const MasterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MasterLayout;
