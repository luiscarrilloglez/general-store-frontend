import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { saveProduct, updateProduct } from "api/productsApi";

const ProductModalComponent = (props) => {
  const { show, product, category, onClose, onSaved, onUpdated } = props;

  const { register, handleSubmit, reset } = useForm();

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (product) {
      reset({
        name: product?.name ?? "",
        price: product?.price ?? "",
        imageUrl: product?.imageUrl ?? "",
        description: product?.description ?? "",
      });
    }
  }, [product, reset]);

  const handleOnClose = () => {
    onClose?.();
    reset({
      name: "",
      price: "",
      imageUrl: "",
      description: "",
    });
  };

  const onSubmit = async (formValues) => {
    try {
      setIsSaving(true);

      formValues.category = category?.key;

      if (product) {
        const updatedProduct = await updateProduct(product._id, formValues);
        toast.success("Success! The product has been updated.");
        onUpdated?.(updatedProduct);
      } else {
        const savedProduct = await saveProduct(formValues);
        toast.success("Success! The product has been added.");
        onSaved?.(savedProduct);
        handleOnClose();
      }
    } catch (error) {
      toast.error(
        "Error! An error occurred while adding the product information, please try again."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal show={show} onHide={handleOnClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>{`${product?.name ? "Edit" : "New"} product in ${
            category?.label
          }`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name" className="required">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" {...register("name")} />
          </Form.Group>

          <Form.Group controlId="price" className="required">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" {...register("price")} />
          </Form.Group>

          <Form.Group controlId="imageUrl" className="required">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              name="imageUrl"
              {...register("imageUrl")}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              {...register("description")}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOnClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" disabled={isSaving}>
            Save product
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

ProductModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  product: PropTypes.object,
  category: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSaved: PropTypes.func,
  onUpdated: PropTypes.func,
};

export default ProductModalComponent;
