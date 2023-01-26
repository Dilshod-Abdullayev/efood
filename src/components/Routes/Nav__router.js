import React from "react";
import Main from "../Main";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Services from "../services/Services";
const NavRouter = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />} />
          <Route index element={<Main />} />
          <Route path="/services" element={<Services/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default NavRouter;
