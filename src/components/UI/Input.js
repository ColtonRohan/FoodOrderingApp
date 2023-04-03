import React from "react";
import classes from "./Input.module.css";

// to allow refs for custom components you should wrap your component in a React.fowardRef ( ) and in the paramaters of your componenent
// you should add a ref paramater, then in your default input tag you can add ref={refs}
const Input = React.forwardRef((props, refs) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={refs} {...props.input} />
    </div>
  );
});

export default Input;
