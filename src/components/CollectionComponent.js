import { useState } from "react";

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

  const handleOnDeleteProduct = async (id, index) => {
    const isDeleted = await deleteProduct(id);

    if (isDeleted) {
      if (index > -1) {
        const productsCopy = Array.from(listProducts);

        productsCopy.splice(index, 1);
        setListProducts(productsCopy);
      }

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
        onClose={() => setShowProductModal(false)}
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

CollectionComponent.propTypes = {};

export default CollectionComponent;
