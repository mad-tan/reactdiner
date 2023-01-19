import classes from "./HeaderCartButton.module.css";

import { FiShoppingCart } from "react-icons/fi";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>{FiShoppingCart}</span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
