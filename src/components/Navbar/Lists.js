import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/nav.css'
const Lists = () => {
  return (
    <>
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to='/service'>Service</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/cities">Top cities</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to='/Contact'>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Lists;
