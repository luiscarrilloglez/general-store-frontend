import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductCardComponent = (props) => {
  const { product } = props;

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">Agregar a carrito</Button>
      </Card.Body>
    </Card>
  );
};

ProductCardComponent.propTypes = {
  product: PropTypes.object.isRequired,
  isEditable: PropTypes.bool,
};

export default ProductCardComponent;
