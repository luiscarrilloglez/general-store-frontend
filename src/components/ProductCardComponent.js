import { useContext } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import CheckoutContext from "contexts/CheckoutContext";

import { setCheckoutLocalStorage, currencyFormat } from "utils.js";

const ProductCardComponent = (props) => {
  const { product, isAdmin, onEdit, onDelete } = props;

  const [checkoutContext, setCheckoutContext] = useContext(CheckoutContext);

  const handleOnClickAdd = (product) => {
    const checkout = [...checkoutContext];

    checkout.push(product);
    setCheckoutContext(checkout);
    setCheckoutLocalStorage(checkout);
    toast.success("Success! The product has been added to shopping cart.");
  };

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{currencyFormat(product.price)}</Card.Text>
        {isAdmin ? (
          <>
            <Button variant="primary" onClick={() => onEdit(product._id)}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={() => onDelete(product._id)}>
              Delete
            </Button>
          </>
        ) : (
          <Button variant="warning" onClick={() => handleOnClickAdd(product)}>
            Add
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

ProductCardComponent.propTypes = {
  product: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ProductCardComponent;
