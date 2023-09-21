/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={"end"}
      style={{borde }}
    >
      <Offcanvas.Body className="sidebar_menu"></Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
