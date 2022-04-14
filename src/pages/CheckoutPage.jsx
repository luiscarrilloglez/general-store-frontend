import { useContext } from "react";

import CheckoutContext from "contexts/CheckoutContext";
import ProductListTable from "components/ProductListTable";

import styles from "pages/styles.module.css";

const CheckoutPage = () => {
  const [checkoutContext] = useContext(CheckoutContext);

  return (
    <>
      <div className={styles.HeaderSection}>
        <h1>SHOPPING CART</h1>
      </div>

      <div className={styles.Margins}>
        <ProductListTable products={checkoutContext} />
      </div>
    </>
  );
};

export default CheckoutPage;
