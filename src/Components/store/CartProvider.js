import React, { useReducer } from "react";

import CartContext from "./cart-context";

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducerFunction = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const itemIsPresent = state.items[itemIndex];

    let updatedItems;
    if (itemIsPresent) {
      let updatedItem;
      updatedItem = {
        ...itemIsPresent,
        amount: itemIsPresent.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }  
  
  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const itemIsPresent = state.items[itemIndex];
    let updatedItems;
    if(itemIsPresent.amount===1)  {
        updatedItems = state.items.filter(item=>item.id !== action.id)
    }
    else{
        let updatedItem;
        updatedItem = { ...itemIsPresent, amount: itemIsPresent.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
    }
    const updatedTotalAmount = state.totalAmount - itemIsPresent.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } 
    return cartDefaultState;
  
};

const CartProvider = (props) => {
  const [cartState, dispatchCartFunction] = useReducer(
    cartReducerFunction,
    cartDefaultState
  );

  const addItemsHandler = (item) => {
    dispatchCartFunction({ type: "ADD", item: item });
  };

  const removeItemsHandler = (id) => {
    dispatchCartFunction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
