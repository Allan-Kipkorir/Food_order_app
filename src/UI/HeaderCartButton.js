import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span>{props.children} </span>
      <span> </span>
      <span> </span>
    </button>
  );
};
export default HeaderCartButton;
