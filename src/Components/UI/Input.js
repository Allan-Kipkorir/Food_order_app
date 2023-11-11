import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref = {ref} {...props.input} />
    </div>
  );
});
export default Input;
// This is basically a reusable component that allows the user to add inputs without having to rewrite code over and over
