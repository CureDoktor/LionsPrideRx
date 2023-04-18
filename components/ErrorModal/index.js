import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ErrorModal(props) {
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <div onClick={props.onSubmit}>Close</div>
      </Modal.Footer>
    </Modal>
  );
}
