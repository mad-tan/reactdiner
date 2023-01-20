import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";

import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderCartButton = (props) => {
  const [btnUpdated, setBtnUpdated] = useState(false)

  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const cartNumber = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnUpdated ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length===0)  return;
    setBtnUpdated(true)
    
    const timer = setTimeout(()=>{
      setBtnUpdated(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>{AiOutlineShoppingCart}</span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
