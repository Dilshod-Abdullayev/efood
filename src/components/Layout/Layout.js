import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
    </div>
  );
};

export default Layout;
