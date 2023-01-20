import React from "react";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const itemAmountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandler = (event) =>{
    event.preventDefault();
    const amountNumber = itemAmountRef.current.value;
    const integerAmountNumber = +amountNumber
    if(amountNumber.trim().length===0 || integerAmountNumber<1 || integerAmountNumber >4){
      setAmountIsValid(false);
      return;
    }
    props.onAddCart(integerAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref = {itemAmountRef}
        label="Amount"
        input={{ type: "number", min: "1", max: "4", step: "1", defaultValue: "1" }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter valid amount (1-4).</p>}
    </form>
  );
};

export default MealItemForm;
