import React from "react";

import "./Switcher.scss";

export default function Switcher() {
  const list = "list";
  const grid = "grid";
  return (
    <div className="toggle">
      <input
        className="toggle_input"
        type="checkbox"
        defaultChecked={list}
        onChange={grid}
      />
      <div className="toggle_bg"></div>
      <div className="toggle_switch">
        <div className="toggle_switch_grid"></div>
        <div className="toggle_switch_list"></div>
      </div>
    </div>
  );
}
