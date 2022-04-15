import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const CheckoutFormCardComponent = (props) => {
  const { isSaving, onCheckout } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaContactInfo) });

  const onSubmit = async (formValues) => {
    onCheckout?.(formValues);
  };

  return (
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
            placeholder="* Full name"
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
            placeholder="* Street and number"
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
            placeholder="* Neighborhood"
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
            placeholder="* Zip code"
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
            placeholder="* City"
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
            placeholder="* State"
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
            placeholder="* Email"
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
        <Card.Footer className="text-center">
          <Button type="submit" variant="primary" size="lg" disabled={isSaving}>
            Checkout
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
};

CheckoutFormCardComponent.propTypes = {
  isSaving: PropTypes.bool,
  onCheckout: PropTypes.func,
};

export default CheckoutFormCardComponent;
