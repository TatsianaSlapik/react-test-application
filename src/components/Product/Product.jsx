import React from "react";
import ButtonCart from "../ButtonCart/ButtonCart";
import "./Product.scss";

const AboutTheProduct = {
  NAME: "Name",
  DESCRIPTION: "Description",
  PRICE: "Price",
};

export default function Product({ name, description, image, price }) {
  return (
    <div className="product">
      <img className="product_img" src={image} alt="photo" />
      <div>
        <h2 className="product_name">
          {AboutTheProduct.NAME} : {name}
        </h2>
        <h3 className="product_price">
          {AboutTheProduct.PRICE}:{price}
        </h3>
        <p className="product_ description">
          {AboutTheProduct.DESCRIPTION}: {description}
        </p>

        <ButtonCart />
      </div>
    </div>
  );
}
