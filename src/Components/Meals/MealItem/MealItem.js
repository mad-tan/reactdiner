import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

const addCartHandler = (amount) =>{
  cartCtx.addItems({
    id:props.meal.id,
    name:props.meal.name,
    amount: amount,
    price:props.meal.price
  })
}

  const price = `$${props.meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
