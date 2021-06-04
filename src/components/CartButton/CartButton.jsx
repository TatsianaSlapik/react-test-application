import React from "react";
import { useDispatch } from "react-redux";

import Cart from "../../assets/img/cart.png";
import actions from "../../utils/actions";

import "./CartButton.scss";

export default function ButtonCart() {
  const dispatch = useDispatch();

  const showPopup = () => {
    dispatch({ type: actions.SHOW_ADD_TO_CART_POPUP, payload: true });
  };

  return (
    <div className="button_container">
      <button className="button" onClick={showPopup}>
        <img src={Cart} alt="basket" />
        <p>Add to cart</p>
      </button>
    </div>
  );
}
