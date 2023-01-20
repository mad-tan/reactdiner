import React, { useContext } from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length>0;
  const addItemHandler = (item) =>{
    cartCtx.addItems({
      id:item.id,
      name:item.name,
      amount: 1,
      price:item.price
    })
  }

  const removeItemHandler = (id) =>{
    cartCtx.removeItems(id)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(
        (item) => (
          <CartItem  key = {item.id} item={item} onAddItems={addItemHandler.bind(null,item)} onRemoveItems={removeItemHandler.bind(null,item.id)}/>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
