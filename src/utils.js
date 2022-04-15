export const currencyFormat = (price) => {
  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dollarUS.format(price);
};

export const getShoppingCartLocalStorage = () => {
  return JSON.parse(localStorage.getItem("r17-products"));
};

export const setShoppingCartLocalStorage = (checkout) => {
  localStorage.setItem("r17-products", JSON.stringify(checkout));
};
