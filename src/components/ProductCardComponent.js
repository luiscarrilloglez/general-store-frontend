import { useContext } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import ShoppingCartContext from "contexts/ShoppingCartContext";

import { setShoppingCartLocalStorage, currencyFormat } from "utils.js";

const ProductCardComponent = (props) => {
  const { product, isAdmin, onEdit, onDelete } = props;

  const [shoppingCartContext, setShoppingCartContext] =
    useContext(ShoppingCartContext);

  const handleOnClickAdd = (product) => {
    const shoppingCart = [...shoppingCartContext];

    shoppingCart.push(product);
    setShoppingCartContext(shoppingCart);
    setShoppingCartLocalStorage(shoppingCart);
    toast.success("Success! The product has been added to your shopping cart.");
  };

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.imageUrl}
        style={{ maxHeight: "200px", objectFit: "scale-down" }}
      />
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
