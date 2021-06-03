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
        <h2 className="product_name">{name}</h2>
        <h3 className="product_price">{price} &#8381;</h3>
        {/* <p className="product_ description">{description}</p> */}
      </div>
      <ButtonCart />
    </div>
  );
}
