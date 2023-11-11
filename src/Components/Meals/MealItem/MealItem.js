import cartContext from "../../../Store/cart-context"
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";



const MealItem = (props) => {
  const cartCtx = useContext(cartContext)
  const AddToCart = amount =>{
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price

    })
  }
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart = {AddToCart}/>
      </div>
    </li>
  );
};
export default MealItem;
