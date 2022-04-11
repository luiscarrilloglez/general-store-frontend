import PropTypes from "prop-types";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCardComponent from "components/ProductCardComponent";

const ProductsListComponent = (props) => {
  const { products } = props;

  return (
    <Row xs={1} md={4} className="g-4">
      {products?.map((product) => {
        return (
          <Col>
            <ProductCardComponent key={product._id} product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

ProductsListComponent.propTypes = {
  products: PropTypes.array,
};

export default ProductsListComponent;
