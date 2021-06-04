import React, { useState } from "react";

import "./Accordion.scss";

export default function Accordion({ name, content }) {
  const [showContent, setShowContent] = useState(true);
  const show = () => setShowContent(!showContent);

  return (
    <>
      <div className="accordion-item__line" onClick={show}>
        <h3 className="filters_filter_title">{name}</h3>
        {showContent === false ? (
          <span className="accordion-item_icon_hide"></span>
        ) : (
          <span className="accordion-item_icon"></span>
        )}
      </div>
      {showContent === false ? (
        <div className="accordion_content_hide">{content}</div>
      ) : (
        <div className="accordion_content">{content}</div>
      )}
    </>
  );
}
