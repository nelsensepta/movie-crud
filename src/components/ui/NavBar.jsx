import { NavLink, Outlet } from "react-router-dom";
import { FaGg } from "react-icons/fa";
import { FiAlignRight, FiX } from "react-icons/fi";
import { useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [btn, setBtn] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset < 90 ? false : true);
    return () => (window.onscroll = null);
  };
  const activeStyle = {
    color: "#fff",
    backgroundColor: "transparent",
  };

  return (
    <header className={isScrolled ? "header activeScroll" : "header"}>
      <div className="container">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <FaGg className="logo" />
        </NavLink>
        <button className="nav-btn" onClick={() => setBtn(!btn)}>
          <FiAlignRight />
        </button>
        <nav className={btn ? "navigation active-nav " : "navigation"}>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={() => setBtn(!btn)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setBtn(!btn)}
                to="/watchlist"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                WatchList
              </NavLink>
            </li>
          </ul>
          <button className="btn-close" onClick={() => setBtn(!btn)}>
            <FiX />
          </button>
        </nav>
      </div>
      <Outlet />
    </header>
  );
};

export default NavBar;
