import { useContext } from "react";
import PropTypes from "prop-types";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import ShoppingCartContext from "contexts/ShoppingCartContext";

import { setShoppingCartLocalStorage, currencyFormat } from "utils.js";

const ProductListTableComponent = (props) => {
  const { products } = props;

  const [shoppingCartContext, setShoppingCartContext] =
    useContext(ShoppingCartContext);

  const handleOnClickDelete = (index) => {
    if (index === -1) {
      return "Error! An error occurred while removing the product, please try again.";
    }

    const shoppingCart = [...shoppingCartContext];

    shoppingCart.splice(index, 1);
    setShoppingCartContext(shoppingCart);
    setShoppingCartLocalStorage(shoppingCart);
    toast.success(
      "Success! The product has been removed from your shopping cart."
    );
  };

  return (
    <Table hover size="lg" className="text-center">
      <thead>
        <tr
          style={{
            height: "60px",
            verticalAlign: "middle",
          }}
        >
          <th>
            <h5>PRODUCT</h5>
          </th>
          <th>
            <h5>PRICE</h5>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product._id} style={{ verticalAlign: "middle" }}>
              <td>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginRight: "1rem",
                  }}
                />
                {product.name}
              </td>
              <td>{currencyFormat(product.price)}</td>
              <td>
                <Button
                  variant="danger"
                  title="Delete product from your shopping cart"
                  onClick={(index) => handleOnClickDelete(index)}
                >
                  X
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ProductListTableComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ProductListTableComponent;
