import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="background-color-system d-flex align-items-center text-light px-5">
      <div className="me-auto">
        <Link to="/" className="fs-3 fw-bold nav-link">
          <img src="https://cdn.anotepad.com/images/anotepad.svg" alt="logo" width={40}/>
          <span>aNotepad</span>
        </Link>
      </div>
      <ul className="list-inline m-0">
        <li className="list-inline-item">
          <Link className="nav-link" to="/features">
            <span>Features</span>
          </Link>
        </li>
        <li className="list-inline-item mx-4">
          <Link className="nav-link" to="/create-account">
            <span>Register/Login</span>
          </Link>
        </li>
        <li className="list-inline-item">Language</li>
      </ul>
    </div>
  );
};

export default Header;
