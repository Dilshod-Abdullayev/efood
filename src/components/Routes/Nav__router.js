import React from "react";
import Main from "../Main";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Servise from "../../pages/Servise";
import Contact from "../../pages/Contact/Contact";
const NavRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/service" element={<Servise />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default NavRouter;
