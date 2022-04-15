import { useContext, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import ShoppingCartContext from "contexts/ShoppingCartContext";
import ProductListTableComponent from "components/ProductListTableComponent";
import CheckoutFormCardComponent from "components/CheckoutFormCardComponent";
import { saveOrder } from "api/ordersApi";

import { currencyFormat, setShoppingCartLocalStorage } from "utils.js";
import styles from "pages/styles.module.css";

const CheckoutPage = () => {
  const [isSaving, setIsSaving] = useState(false);

  const [shoppingCartContext, setShoppingCartContext] =
    useContext(ShoppingCartContext);
  const history = useHistory();

  const totalAmount = () => {
    return shoppingCartContext.reduce(
      (total, product) => total + product.price,
      0
    );
  };

  const handleCheckout = async (formValues) => {
    const order = { ...formValues };

    order.products = [...shoppingCartContext];

    try {
      setIsSaving(true);
      const savedOrder = await saveOrder(order);

      if (!savedOrder) {
        throw new Error("Server error");
      }
      toast.success("Success! Your shopping cart has been sent successfully.");

      setShoppingCartContext([]);
      setShoppingCartLocalStorage([]);

      setIsSaving(false);

      history.push("/");
    } catch (error) {
      toast.error(
        "Error! An error occurred while adding the product information, please try again."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <div className={styles.Cover}>
        <h1>SHOPPING CART</h1>
      </div>

      <div className={styles.Margins}>
        {!shoppingCartContext?.length ? (
          <div
            className="text-center"
            style={{ paddingTop: "100px", paddingBottom: "100px" }}
          >
            <h2>There is nothing</h2>
            <h3>Add products to your shopping cart.</h3>
          </div>
        ) : (
          <>
            <ProductListTableComponent products={shoppingCartContext} />

            <Row>
              <Col md={4} className="order-md-last mt-5 text-center">
                <Card bg="light" border="dark">
                  <Card.Header>
                    <Card.Title>TOTAL AMOUNT</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>Total {currencyFormat(totalAmount())}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={8} className="mt-5">
                <CheckoutFormCardComponent
                  isSaving={isSaving}
                  onCheckout={handleCheckout}
                />
              </Col>
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;
