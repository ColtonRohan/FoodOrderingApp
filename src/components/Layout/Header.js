import React, { useState } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meal.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food background" />
      </div>
    </React.Fragment>
  );
};

export default Header;
