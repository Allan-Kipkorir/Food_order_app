import classes from "./Header.module.css";
import imagesrc from "../../Assets/meals.jpg";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>
          Your Cart
        </HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={imagesrc} alt="background"></img>
      </div>
    </>
  );
};

export default Header;
