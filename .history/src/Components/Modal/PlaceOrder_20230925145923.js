/** @format */

import Modal from "react-bootstrap/Modal";

export function PlaceOrder(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Place_Order_Modal">
          <img src="programming.gif" alt="Computer man" />
          <p>Your order is placed</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
