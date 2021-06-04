import React from "react";

import Filters from "../../components/Filters/Filters";
import Popup from "../../components/Popup/Popup";
import ProductListing from "../../components/ProductListing/ProductListing";

import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <Filters />
      <ProductListing></ProductListing>
      <Popup text="Product added to cart"></Popup>
    </div>
  );
}
