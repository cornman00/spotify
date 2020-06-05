import React from "react";
import ImageNotFound from "../../ImageNotFound.jpg";
import "../../App.css";
import { Link } from "react-router-dom";

const SingerBox = (props) => {
  const { images, name, id } = props;

  //check if the image array is empty since some artists' image data provided by the API call are empty
  const singer_img = images.length === 0 ? ImageNotFound : images[0].url;

  return (
    <>
      <Link to={`/albums/${id}`}>
        <div className="box">
          <div>
            <img className="singer-img" src={singer_img} alt="Not Loaded" />
            {name}
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingerBox;
