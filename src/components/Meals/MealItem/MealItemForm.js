import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  //refs are used to obtain the value from inside the input, but we use a custom componetnt for input so theres another step to add in our custom input
  const amountInputRef = useRef();
  const [valid, setValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    // refs are always stores as a string, even if its a number, use the + operator to turn enteredAmount into an int
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valid && <p>That is Not a valid ammount!</p>}
    </form>
  );
};

export default MealItemForm;
