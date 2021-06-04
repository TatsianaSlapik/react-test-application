import React from "react";
import { connect, useDispatch } from "react-redux";
import actions from "../../utils/actions";

import "./Switcher.scss";

function Switcher({ listState }) {
  const dispatch = useDispatch();

  const toggleSwitch = (e) => {
    dispatch({ type: actions.CHANGE_VIEW, payload: e.target.checked });
  };

  return (
    <div className="toggle">
      <input
        className="toggle_input"
        type="checkbox"
        checked={listState}
        onChange={toggleSwitch}
      />
      <div className="toggle_bg"></div>
      <div className="toggle_switch">
        <div className="toggle_switch_grid"></div>
        <div className="toggle_switch_list"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ listState: state.listViewState });

export default connect(mapStateToProps)(Switcher);
