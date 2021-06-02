import React, { useState } from "react";

export default function Filters() {
  return (
    <div className="filters">
      <header className="filters__header">
        <h2 className="filters__header__title">Filters</h2>
      </header>
      <div className="filters__inner">
        <div className="filters__filter">
          <h3 className="filters__filter__title">Category</h3>
          <ul>
            <li>
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
          <h3 className="filters__filter__title">Price</h3>
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
