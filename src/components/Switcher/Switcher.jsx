import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../utils/actions";

import "./Switcher.scss";

export default function Switcher() {
  const list = "list";
  const grid = "grid";

  const dispatch = useDispatch();

  const toggleSwitch = () => {
    dispatch({ type: actions.CHANGE_VIEW, payload: list });
  };
  return (
    <div className="toggle">
      <input
        className="toggle_input"
        type="checkbox"
        defaultChecked={list}
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
