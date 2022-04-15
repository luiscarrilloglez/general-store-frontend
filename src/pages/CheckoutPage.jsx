import { useContext, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ShoppingCartContext from "contexts/ShoppingCartContext";
import ProductListTable from "components/ProductListTable";

import { currencyFormat } from "utils.js";
import styles from "pages/styles.module.css";

// Validation schema
const schemaContactInfo = yup
  .object({
    name: yup.string().trim().required(),
    street: yup.string().trim().required(),
    neighborhood: yup.string().trim().required(),
    zipCode: yup
      .string()
      .trim()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5)
      .max(5),
    city: yup.string().trim().required(),
    state: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    phone: yup.string().trim(),
  })
  .required();

const CheckoutPage = () => {
  const [shoppingCartContext] = useContext(ShoppingCartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaContactInfo) });

  const [isSaving, setIsSaving] = useState(false);

  const totalAmount = () => {
    return shoppingCartContext.reduce(
      (total, product) => total + product.price,
      0
    );
  };

  const onSubmit = async (formValues) => {
    try {
      setIsSaving(true);
      console.log(formValues);
      /*

      if (product) {
        const updatedProduct = await updateProduct(product._id, formValues);
        toast.success("Success! The product has been updated.");
        onUpdated?.(updatedProduct);
      } else {
        const savedProduct = await saveProduct(formValues);
        toast.success("Success! The product has been added.");
        onSaved?.(savedProduct);
        handleOnClose();
      }
      */
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
      <div className={styles.HeaderSection}>
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
            <ProductListTable products={shoppingCartContext} />

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
                <Card>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Card.Header className="text-center">
                      <Card.Title>CONTACT INFORMATION</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="name"
                        {...register("name")}
                        placeholder="Full name"
                        isInvalid={errors.name}
                      />
                      {errors.name && (
                        <Form.Control.Feedback type="invalid">
                          {errors.name?.message}
                        </Form.Control.Feedback>
                      )}

                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="street"
                        {...register("street")}
                        placeholder="Street and number"
                        isInvalid={errors.street}
                      />
                      {errors.street && (
                        <Form.Control.Feedback type="invalid">
                          {errors.street?.message}
                        </Form.Control.Feedback>
                      )}

                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="neighborhood"
                        {...register("neighborhood")}
                        placeholder="Neighborhood"
                        isInvalid={errors.neighborhood}
                      />
                      {errors.neighborhood && (
                        <Form.Control.Feedback type="invalid">
                          {errors.neighborhood?.message}
                        </Form.Control.Feedback>
                      )}

                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="zipCode"
                        {...register("zipCode")}
                        placeholder="Zip code"
                        isInvalid={errors.zipCode}
                      />
                      {errors.zipCode && (
                        <Form.Control.Feedback type="invalid">
                          {errors.zipCode?.message}
                        </Form.Control.Feedback>
                      )}

                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="city"
                        {...register("city")}
                        placeholder="City"
                        isInvalid={errors.city}
                      />
                      {errors.city && (
                        <Form.Control.Feedback type="invalid">
                          {errors.city?.message}
                        </Form.Control.Feedback>
                      )}

                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="state"
                        {...register("state")}
                        placeholder="State"
                        isInvalid={errors.state}
                      />
                      {errors.state && (
                        <Form.Control.Feedback type="invalid">
                          {errors.state?.message}
                        </Form.Control.Feedback>
                      )}

                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="email"
                        {...register("email")}
                        placeholder="Email"
                        isInvalid={errors.email}
                      />

                      {errors.email && (
                        <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      )}

                      <Form.Control
                        className="form-control-without-label"
                        type="text"
                        name="phone"
                        {...register("phone")}
                        placeholder="Phone number"
                        isInvalid={errors.phone}
                      />

                      {errors.phone && (
                        <Form.Control.Feedback type="invalid">
                          {errors.phone?.message}
                        </Form.Control.Feedback>
                      )}
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isSaving}
                      >
                        Save product
                      </Button>
                    </Card.Footer>
                  </Form>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;
