import React, { useState } from "react";

import "./Accordion.scss";

export default function Accordion({ name, content }) {
  const [showContent, setShowContent] = useState(true);
  const show = () => setShowContent(!showContent);

  return (
    <>
      <div className="accordion-item__line" onClick={show}>
        <h3 className="filters_filter_title">{name}</h3>
        <span
          className={
            showContent === false
              ? "accordion-item_icon_hide"
              : "accordion-item_icon"
          }
        ></span>
      </div>
      <div
        className={
          showContent === false ? "accordion_content_hide" : "accordion_content"
        }
      >
        {content}
      </div>
    </>
  );
}
