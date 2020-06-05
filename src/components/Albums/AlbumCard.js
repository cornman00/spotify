import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export class AlbumCard extends Component {
  render() {
    const { img, name, release_date, albumID } = this.props;

    return (
      <div
        className="card col-9 mx-2 col-md-6 col-lg-3 my-3"
        style={{ textAlign: "center" }}
      >
        <img
          src={img.url}
          alt="Not Loaded"
          className="card-img-top album-img"
        />
        <div className="card-body album-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`Release Date: ${release_date}`}</p>
          <Link to={`/albums/tracks/${albumID}`}>
            <button className="btn btn-outline-dark">Tracks</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AlbumCard;
