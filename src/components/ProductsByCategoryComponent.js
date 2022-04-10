import PropTypes from "prop-types";

import CardGroup from "react-bootstrap/CardGroup";

import ProductCardComponent from "components/ProductCardComponent";
import LoadingComponent from "components/LoadingComponent";
import { useProducts } from "hooks/useProducts";

const ProductsByCategoryComponent = (props) => {
  const { categoryKey } = props;

  const { products, loadingProducts } = useProducts(categoryKey);

  if (loadingProducts) return <LoadingComponent />;

  return (
    <CardGroup>
      {products.map((product) => {
        return <ProductCardComponent key={product._id} product={product} />;
      })}
    </CardGroup>
  );
};

ProductsByCategoryComponent.propTypes = {
  categoryKey: PropTypes.string,
};

export default ProductsByCategoryComponent;
