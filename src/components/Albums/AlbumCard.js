import React, { Component } from "react";
import "../../App.css";
import styled from "styled-components";

export class AlbumCard extends Component {
  render() {
    return (
      <div
        className="card col-9 mx-2 col-md-6 col-lg-3 my-3"
        style={{ textAlign: "center" }}
      >
        <img
          src={this.props.img.url}
          alt="Album Image"
          className="card-img-top album-img"
        />
        <div className="card-body album-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">
            {`Release Date: ${this.props.release_date}`}
          </p>
        </div>
      </div>
    );
  }
}

const AlbumCardContainer = styled.div``;

export default AlbumCard;
