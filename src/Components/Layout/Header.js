import React from "react";

import classes from "./Header.module.css";

import image from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Diner</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Dinner Table" />
      </div>
    </>
  );
};

export default Header;