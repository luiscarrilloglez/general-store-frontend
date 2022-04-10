import { useState } from "react";

import Button from "react-bootstrap/Button";

import ProductsByCategoryComponent from "components/ProductsByCategoryComponent";
import ProductModalComponent from "components/ProductModalComponent";
import { useCategory, useIsAdmin } from "hooks/useQuery";

const CollectionComponent = () => {
  const [showProductModal, setShowProductModal] = useState(false);

  const category = useCategory();
  const isAdmin = useIsAdmin();

  return (
    <>
      <ProductModalComponent
        show={showProductModal}
        onClose={() => setShowProductModal(false)}
      />
      <div className="d-flex justify-content-between mb-3">
        <h1>{category?.label}</h1>
        {isAdmin && (
          <Button onClick={() => setShowProductModal(true)}>New product</Button>
        )}
      </div>

      <ProductsByCategoryComponent categoryKey={category?.key} />
    </>
  );
};

CollectionComponent.propTypes = {};

export default CollectionComponent;
