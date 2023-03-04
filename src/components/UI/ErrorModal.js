import React from "react";
import ReactDom from "react-dom";

import Button from "./Button";
import Card from "./Card";
import style from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onCloseModal}/>
}

const Overlay = (props) => {
    return <Card className={style.modal}>
    <header className={style.header}>
      <h1>{props.title}</h1>
    </header>

    <div className={style.content}>
      <p>{props.message}</p>
    </div>

    <footer className={style.actions}>
      <Button onClick={props.onCloseModal}>Okay</Button>
    </footer>
  </Card>
}
const ErrorModal = (props) => {

  return (
    // use fragment if you component contains more than 1 element <></> or 
    //<React.Fragment></React.Fragment> or create custom Wrapper that returns children

    //React portals to structure our HTML structure, add overlays or backdrops on the top of root element
    <>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay title={props.title} message={props.message} onCloseModal={props.onCloseModal}/>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
