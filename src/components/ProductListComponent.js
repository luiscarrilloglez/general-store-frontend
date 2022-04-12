import PropTypes from "prop-types";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCardComponent from "components/ProductCardComponent";

const ProductsListComponent = (props) => {
  const { products, isAdmin, onEdit, onDelete } = props;

  return (
    <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
      {products?.map((product, index) => {
        return (
          <Col key={product._id}>
            <ProductCardComponent
              product={product}
              isAdmin={isAdmin}
              onEdit={(id) => onEdit(id, index)}
              onDelete={(id) => onDelete(id, index)}
            />
          </Col>
        );
      })}
    </Row>
  );
};

ProductsListComponent.propTypes = {
  products: PropTypes.array,
  isAdmin: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ProductsListComponent;
