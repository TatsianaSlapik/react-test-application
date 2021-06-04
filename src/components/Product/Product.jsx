import React from "react";
import CartButton from "../CartButton/CartButton";
import "./Product.scss";

export default function Product({ name, description, image, price, fullView }) {
  return (
    <>
      <div className={fullView ? "product_view" : "product"}>
        <img className="product_img" src={image} alt="photo" />
        <div className="product_content">
          <h2 className="product_name">{name}</h2>
          {fullView ? (
            <p className="product_description">{description}</p>
          ) : (
            <h3 className="product_price">{price} &#8381;</h3>
          )}
        </div>
        {fullView ? (
          <div className="product_price_container">
            <h3 className="product_price">{price} &#8381;</h3>
            <CartButton />
          </div>
        ) : (
          <CartButton />
        )}
      </div>
    </>
  );
}
