import PropTypes from "prop-types";

import CardGroup from "react-bootstrap/CardGroup";

import ProductCardComponent from "components/ProductCardComponent";
import { useProducts } from "hooks/useProducts";

const ProductsByCategoryComponent = (props) => {
  const { category } = props;

  const { products } = useProducts(category);

  return (
    <CardGroup>
      {products.map((product) => {
        return <ProductCardComponent key={product._id} product={product} />;
      })}
    </CardGroup>
  );
};

ProductsByCategoryComponent.propTypes = {
  category: PropTypes.string,
};

export default ProductsByCategoryComponent;
