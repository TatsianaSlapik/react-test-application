import React, { useState, useEffect } from "react";

import Product from "../Product/Product";
import Switcher from "../Switcher/Switcher";
import { connect } from "react-redux";
import "./ProductListing.scss";

function ProductListing({ listState }) {
  const [productList, setProductsList] = useState([]);

  useEffect(() => {
    fetch(
      `https://fakerapi.it/api/v1/products?_quantity=10&_taxes=10&_categories_type=string`
    )
      .then((res) => res.json())
      .then((result) => {
        setProductsList(result.data);
      });
  }, []);

  return (
    <div>
      <div className="product_switcher">
        <Switcher></Switcher>{" "}
      </div>
      <div
        className={listState ? "product_container list" : "product_container"}
      >
        {productList.map((el, i) => {
          return (
            <Product
              name={el.name}
              description={el.description}
              image={el.image + `?id=${i}`}
              price={el.price}
              key={i}
              fullView={listState}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ listState: state.listViewState });
export default connect(mapStateToProps)(ProductListing);
