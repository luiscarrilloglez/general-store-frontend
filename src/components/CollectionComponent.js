import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import ProductListComponent from "components/ProductListComponent";
import ProductModalComponent from "components/ProductModalComponent";
import LoadingComponent from "components/LoadingComponent";
import { useCategory, useIsAdmin } from "hooks/useQuery";
import { useProducts } from "hooks/useProducts";

const CollectionComponent = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [listProducts, setListProducts] = useState([]);

  const isAdmin = useIsAdmin();
  const category = useCategory();
  const { products, loadingProducts } = useProducts(category.key);

  useEffect(() => {
    if (products.length) {
      setListProducts(products);
    }
  }, [products]);

  const handleOnSaved = (product) => {
    setListProducts([product, ...listProducts]);
    setShowProductModal(false);
  };

  return (
    <>
      <ProductModalComponent
        show={showProductModal}
        category={category}
        onClose={() => setShowProductModal(false)}
        onSaved={handleOnSaved}
      />
      <div className="d-flex justify-content-between mb-3">
        <h1>{category?.label}</h1>
        {isAdmin && (
          <Button onClick={() => setShowProductModal(true)}>New product</Button>
        )}
      </div>

      {loadingProducts ? (
        <LoadingComponent />
      ) : (
        <ProductListComponent products={listProducts} />
      )}
    </>
  );
};

CollectionComponent.propTypes = {};

export default CollectionComponent;
