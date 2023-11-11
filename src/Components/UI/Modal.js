import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalOverlays = document.getElementById("Overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalOverlays
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalOverlays
      )}
    </Fragment>
  );
};
export default Modal;
