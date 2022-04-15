export const currencyFormat = (price) => {
  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dollarUS.format(price);
};

export const getShoppingCartLocalStorage = () => {
  return JSON.parse(localStorage.getItem("r17-checkout"));
};

export const setShoppingCartLocalStorage = (checkout) => {
  localStorage.setItem("r17-checkout", JSON.stringify(checkout));
};
