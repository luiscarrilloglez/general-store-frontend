import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductCardComponent = (props) => {
  const { product, isAdmin, onEdit, onDelete } = props;

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.imageUrl}
        style={{ width: "100%", height: "15vw", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
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
          <Button variant="primary">Agregar a carrito</Button>
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
