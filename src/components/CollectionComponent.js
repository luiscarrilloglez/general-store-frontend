import { useState } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import ProductListComponent from "components/ProductListComponent";
import ProductModalComponent from "components/ProductModalComponent";
import { deleteProduct } from "api/productsApi";

const CollectionComponent = (props) => {
  const { products, isAdmin, category } = props;

  const [showProductModal, setShowProductModal] = useState(false);
  const [listProducts, setListProducts] = useState(products);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleOnSavedProduct = (product) => {
    setListProducts([product, ...listProducts]);
    setShowProductModal(false);
  };

  const handleOnUpdatedProduct = (product) => {
    const productIndex = listProducts.findIndex(
      (prod) => prod._id === product._id
    );

    if (productIndex > -1) {
      const productsCopy = Array.from(listProducts);

      productsCopy[productIndex] = product;
      setListProducts(productsCopy);
    }
    setShowProductModal(false);
  };

  const handleOnEditProduct = (id, index) => {
    let product;

    if (index > -1) {
      product = listProducts[index];
    }

    if (product) {
      setCurrentProduct(product);
      setShowProductModal(true);
    }
  };

  const handleOnCloseProductModal = () => {
    setShowProductModal(false);
    setCurrentProduct(null);
  };

  const handleOnDeleteProduct = async (id, index) => {
    if (index === -1) {
      return "Error! An error occurred while deleting the product, please try again.";
    }

    if (await deleteProduct(id)) {
      const productsCopy = Array.from(listProducts);

      productsCopy.splice(index, 1);
      setListProducts(productsCopy);

      toast.success("Success! The product has been deleted.");
    } else {
      toast.error(
        "Error! An error occurred while deleting the product, please try again."
      );
    }
  };

  return (
    <>
      <ProductModalComponent
        show={showProductModal}
        product={currentProduct}
        category={category}
        onClose={handleOnCloseProductModal}
        onSaved={handleOnSavedProduct}
        onUpdated={handleOnUpdatedProduct}
      />

      {isAdmin && (
        <div className="mb-3 d-flex justify-content-end">
          <Button onClick={() => setShowProductModal(true)}>New product</Button>
        </div>
      )}

      <ProductListComponent
        products={listProducts}
        isAdmin={isAdmin}
        onEdit={handleOnEditProduct}
        onDelete={handleOnDeleteProduct}
      />
    </>
  );
};

CollectionComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  isAdmin: PropTypes.bool,
  category: PropTypes.object.isRequired,
};

export default CollectionComponent;
