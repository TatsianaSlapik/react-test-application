import React, { useState, useEffect } from "react";
import Product from "../Product/Product";

export default function ProductListing() {
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
    <div className="product_container">
      {productList.map((el, i) => {
        return (
          <Product
            name={el.name}
            description={el.description}
            image={el.image}
            price={el.price}
            key={i}
          ></Product>
        );
      })}
    </div>
  );
}