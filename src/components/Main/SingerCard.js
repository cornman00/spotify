import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

const SingerCard = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={showModal} style={{ padding: "1px" }}>
        <div className="card" style={{ width: "8rem" }}>
          <img class="card-img-top" src={props.image[0].url} alt="Card image" />
          <div
            className="card-body"
            style={{ height: "4rem", fontSize: "14px" }}
          >
            <p className="card-text">{props.name}</p>
          </div>
        </div>
      </button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{props.name}'s songs</Modal.Title>
        </Modal.Header>
        <Modal.Body>dc</Modal.Body>
        {console.log(props.tracks)}
        <Modal.Footer>
          <button type="button" className="btn btn-primary" onClick={hideModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingerCard;
