export const url = "https://fakerapi.it/api/v1/";

export const getProducts = (quantity) => {
  return fetch(
    `${url}products?_quantity=${quantity}&_taxes=10&_categories_type=string`
  )
    .then((response) => response.json())
    .catch((e) => {
      console.log("cant get product with error", e);
    });
};
