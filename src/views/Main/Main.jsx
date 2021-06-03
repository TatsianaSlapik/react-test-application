import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import ProductListing from "../../components/ProductListing/ProductListing";

import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <Filters />
      <ProductListing></ProductListing>
    </div>
  );
}
