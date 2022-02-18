import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header: React.FC = () => {
  return (
    <div className={classes["main-header"]}>
      <h1>
        <Link to="/">Poc App</Link>
      </h1>
      <Navigation />
    </div>
  );
};

export default Header;
