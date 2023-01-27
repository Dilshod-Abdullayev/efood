import React from "react";
import Main from "../Main";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Servise from "../../pages/Servise";
const NavRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/service" element={<Servise />} />
        </Route>
      </Routes>
    </>
  );
};

export default NavRouter;
