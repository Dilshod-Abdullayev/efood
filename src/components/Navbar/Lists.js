import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/nav.css'
const Lists = () => {
  return (
    <>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/service'>Service</Link>
        </li>
        <li className="nav-item">
          <Link to="/cities">Top cities</Link>
        </li>
        <li className="nav-item">
          <Link to='/contract'>Contract</Link>
        </li>
      </ul>
    </>
  );
};

export default Lists;
