import React, { useEffect } from "react";

import Product from "../Product/Product";
import Switcher from "../Switcher/Switcher";
import { connect, useDispatch } from "react-redux";
import actions from "../../utils/actions";

import "./ProductListing.scss";

function ProductListing({ listState, productsList }) {
  const dispatch = useDispatch();

  const setProductsList = (data) => {
    dispatch({ type: actions.PRODUCT_LIST, payload: data });
  };

  useEffect(() => {
    if (productsList.length === 0) {
      fetch(
        `https://fakerapi.it/api/v1/products?_quantity=10&_taxes=10&_categories_type=string`
      )
        .then((res) => res.json())
        .then((result) => {
          setProductsList(result.data);
        });
    }
  }, []);

  return (
    <div>
      <div className="product_switcher">
        <Switcher></Switcher>{" "}
      </div>
      <div
        className={listState ? "product_container list" : "product_container"}
      >
        {productsList.map((el, i) => {
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
const mapStateToProps = (state) => ({
  listState: state.listViewState,
  productsList: state.productsList,
});
export default connect(mapStateToProps)(ProductListing);
