import React from "react";
import { connect, useDispatch } from "react-redux";
import actions from "../../utils/actions";

import "./Popup.scss";

function Popup({ showPopup, text }) {
  const dispatch = useDispatch();

  const hidePopup = () => {
    dispatch({ type: actions.SHOW_ADD_TO_CART_POPUP, payload: false });
  };

  return (
    <>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2 className="popup_text">{text}</h2>
            <button className="popup_btn" onClick={hidePopup}>
              ОК
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  showPopup: state.showAddToCartPopup,
});
export default connect(mapStateToProps)(Popup);
