import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ImageNotFound from "../../ImageNotFound.jpg";
import "../../App.css";
import { Link } from "react-router-dom";

import Albums from "../Albums/Albums";
import axios from "axios";

const SingerBox = (props) => {
  const { images, name, id } = props;

  //check if the image array is empty since some artists' image data provided by the API call are empty
  const singer_img = images.length === 0 ? ImageNotFound : images[0].url;

  return (
    <>
      <Link to={`/albums/${id}`}>
        <div className="box">
          <div>
            <img className="singer-img" src={singer_img} alt="Card image" />
            {name}
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingerBox;
