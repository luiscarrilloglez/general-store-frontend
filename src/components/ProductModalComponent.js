import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ProductModalComponent = (props) => {
  const { show, onClose, onSave } = props;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New product</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ProductModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProductModalComponent;
