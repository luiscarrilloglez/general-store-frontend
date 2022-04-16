import { useContext } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
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
    <Card
      className="text-center withoutborder"
      style={{ width: "18rem", height: "24rem" }}
    >
      <Card.Img
        variant="top"
        src={product.imageUrl}
        style={{
          height: "200px",
          objectFit: "scale-down",
        }}
      />
      <Card.Body>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>
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
          <Button
            variant="light"
            onClick={() => handleOnClickAdd(product)}
            style={{ position: "relative", bottom: 0, marginBottom: "1rem" }}
            className="btn btn-circle"
            title="Add to shopping cart"
          >
            <Image src="/assets/shopping_cart.png" alt="Add to shopping cart" />
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
