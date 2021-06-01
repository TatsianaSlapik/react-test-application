import React, { useEffect, useState } from "react";
import ProductListing from "../../components/ProductListing/ProductListing";

import "./Main.scss";

export default function Main() {
  return (
    <>
      <div className="main">
        <ProductListing></ProductListing>
      </div>
    </>
  );
}
