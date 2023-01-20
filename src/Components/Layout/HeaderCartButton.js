import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

import { AiOutlineShoppingCart  } from "react-icons/ai";

const HeaderCartButton = (props) => {
const cartCtx = useContext(CartContext);

const cartNumber = cartCtx.items.reduce((currNumber,item)=>{return currNumber + item.amount},0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span  className={classes.icon}>{AiOutlineShoppingCart}</span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
