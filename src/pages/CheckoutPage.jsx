import { useContext } from "react";

import CheckoutContext from "contexts/CheckoutContext";
import ProductListComponent from "components/ProductListComponent";

import styles from "pages/styles.module.css";

const CheckoutPage = () => {
  const [checkoutContext] = useContext(CheckoutContext);

  return (
    <>
      <div className={styles.HeaderSection}>
        <h1>SHOPPING CART</h1>
      </div>

      <ProductListComponent
        products={checkoutContext}
        isAdmin={false}
        //onEdit={handleOnEditProduct}
        //onDelete={handleOnDeleteProduct}
      />
    </>
  );
};

export default CheckoutPage;
