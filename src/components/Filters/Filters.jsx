import React from "react";
import Accordion from "../Accordion/Accordion";

import "./Filters.scss";
const filters = [
  {
    name: "Category",
    content: (
      <ul>
        <li className="filters_inner_li">
          <input type="checkbox" />
          <label>1</label>
        </li>
        <li className="filters_inner_li">
          <input type="checkbox" />
          <label>2</label>
        </li>
      </ul>
    ),
  },
  {
    name: "Price",
    content: (
      <div className="filters_price_inner">
        <input maxlength="25" size="5" />
        ―
        <input maxlength="25" size="5" />
      </div>
    ),
  },
];

export default function Filters() {
  return (
    <div className="filters">
      <div className="filters_inner">
        {filters.map((el, i) => {
          return (
            <Accordion name={el.name} content={el.content} key={i}></Accordion>
          );
        })}
      </div>
    </div>
  );
}
