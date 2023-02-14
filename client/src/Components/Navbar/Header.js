import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Dropdown from "./Dropdown";

const Header = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="header">
      <div id="menu-bar" className="fas fa-bars"></div>

      {user.role==="user" ? (
        <Link to="/index" className="logo">
          <span>P</span>ACK <span>U</span>R <span>B</span>AGS
        </Link>
      ) : (
        <Link to="/admin" className="logo">
          <span>P</span>ACK <span>U</span>R <span>B</span>AGS
        </Link>
      )}
      <ul className="navbar">
        {props.navItems.map((item) => {
          return (
            <li key={item.title} className="nav-item">
              <HashLink to={item.path}>{item.title}</HashLink>
            </li>
          );
        })}
      </ul>
      <div className="icons">
        {props.user ? (
          <div className="profdet"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <h2>{user.username}</h2>
            {/* <i className="fa fa-user" aria-hidden="true" id="login-btn"></i> */}
            {dropdown && <Dropdown />}
          </div>
        ) : (
          <i
            className="fa fa-user"
            aria-hidden="true"
            id="login-btn"
            onClick={props.openLoginForm}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Header;
