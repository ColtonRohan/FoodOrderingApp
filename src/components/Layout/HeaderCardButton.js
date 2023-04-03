import React, { useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCardButton = (props) => {
  const [animateButton, setAnimateButton] = useState(false);
  const cartCtx = useContext(CartContext);

  // since our cart items are stored at objects with the ammount of meals of each type its better to use this method
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  // this method works but instead of showing the ammount of each item in the cart it only shows the amount of the menu items you selected
  // const numberOfCartItems = cartCtx.items.length;

  const buttonClasses = `${classes.button} ${
    animateButton ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setAnimateButton(true);

    const timer = setTimeout(() => {
      setAnimateButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
