import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const linkClasses = ({ isActive }) =>
    isActive ? styles.activeLink : styles.linkStyle;
  return (
    <header className=" bg-dark text-white p-3">
      <nav className="d-flex gap-3">
        <NavLink to={"/"} className={linkClasses}>
          DineDiscover
        </NavLink>
        <NavLink to={"/add"} className={linkClasses}>
          Add
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
