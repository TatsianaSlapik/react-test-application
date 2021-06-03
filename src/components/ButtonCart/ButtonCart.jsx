import React, { useState } from "react";
import Cart from "../../assets/img/cart.png";
import Popup from "../Popup/Popup";
import "./ButtonCart.scss";

export default function ButtonCart() {
  const [showPopup, setShowPopup] = useState(false);
  const show = () => setShowPopup(true);
  const hide = () => setShowPopup(false);
  return (
    <div className="app">
      <button className="button" onClick={show}>
        <img src={Cart} alt="basket" />
        <p>Add to cart</p>
      </button>
      {showPopup === true ? (
        <Popup onHidePopup={hide} text="Product added to cart"></Popup>
      ) : null}
    </div>
  );
}
