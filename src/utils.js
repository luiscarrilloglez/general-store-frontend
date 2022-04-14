export const currencyFormat = (price) => {
  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dollarUS.format(price);
};

export const getCheckoutLocalStorage = () => {
  return JSON.parse(localStorage.getItem("r17-checkout"));
};

export const setCheckoutLocalStorage = (checkout) => {
  localStorage.setItem("r17-checkout", JSON.stringify(checkout));
};
