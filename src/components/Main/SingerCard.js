import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import notFound from "../../notFound.jpg";
import "../../App.css";

const SingerCard = (props) => {
  const { images, name, artists } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  //check if the image array is empty since some artists' image data provided by the API call are empty
  let singer_img = images.length === 0 ? notFound : images[0].url;

  return (
    <>
      {/* <button type="button" onClick={showModal} style={{ padding: "1px" }}>
        <div className="card" style={{ width: "8rem" }}>
          <img class="card-img-top" src={singer_img} alt="Card image" />
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

        <Modal.Footer>
          <button type="button" className="btn btn-primary" onClick={hideModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal> */}

      <div className="box">
        <div>
          <img className="singer-img" src={singer_img} alt="Card image" />
          <span>{name}</span>
        </div>
      </div>
    </>
  );
};

export default SingerCard;
