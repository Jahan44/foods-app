import React from "react";
import { Link } from "react-router-dom";
import "./Navbars.scss";
const Navbars = () => {
  return (
    <div>
      <nav className="navbar-body">
        <div className="nav-title">
          <h2>
            Meals <span>Foots</span>
          </h2>
        </div>
        <div className="nav-links">
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/categories">
              <li>Categories</li>
            </Link>
            <Link to="/random">
              <li>Random</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
