import React, { useState } from "react";

import "./Filters.scss";
export default function Filters() {
  return (
    <div className="filters">
      <header className="filters_header">
        <h2 className="filters_header_title">Filters</h2>
      </header>
      <div className="filters_inner">
        <div className="filters_filter">
          <h3 className="filters_filter_title">Category</h3>
          <ul>
            <li className="filters_inner_li">
              <input type="checkbox" />
              <label>1</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>2</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>3</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>4</label>
            </li>
          </ul>
        </div>
        <div className="filters_price">
          <h3 className="filters_filter_title">Price</h3>
          <p>
            <input maxlength="25" size="20" />
            -
            <input maxlength="25" size="20" />
          </p>
        </div>
      </div>
    </div>
  );
}
