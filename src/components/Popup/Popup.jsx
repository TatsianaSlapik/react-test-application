import React from "react";

import "./Popup.scss";

export default function Popup({ onHidePopup }) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h2 className="popup_text">Product added to cart</h2>
        <button className="popup_btn" onClick={onHidePopup}>
          ОК
        </button>
      </div>
    </div>
  );
}
