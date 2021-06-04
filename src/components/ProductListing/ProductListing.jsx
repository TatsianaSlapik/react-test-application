import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import Product from "../Product/Product";
import Switcher from "../Switcher/Switcher";
import { getProducts } from "../../utils/api";

import actions from "../../utils/actions";

import "./ProductListing.scss";

function ProductListing({ listState, productsList }) {
  const dispatch = useDispatch();

  const setProductsList = (data) => {
    dispatch({ type: actions.PRODUCT_LIST, payload: data });
  };

  useEffect(() => {
    if (productsList.length === 0) {
      getProducts(10).then((result) => {
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
