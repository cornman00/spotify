import React, { Component } from "react";
import "../../App.css";

export class SingerCard extends Component {
  showTracks = () => {
    return (
      <div
        className="modal fade"
        id="tracksModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="tracksModalLabel"
        aria-hidden="true"
      >
        <div className="doal-idalog" role="document"></div>
      </div>
    );
  };

  render() {
    return (
      <button
        type="button"
        data-toggle="modal"
        data-target="#tracksModal"
        style={{ padding: "1px" }}
      >
        <div className="card" style={{ width: "8rem" }}>
          <img
            class="card-img-top"
            src={this.props.image[0].url}
            alt="Card image"
          />
          <div
            className="card-body"
            style={{ height: "4rem", fontSize: "14px" }}
          >
            <p className="card-text">{this.props.name}</p>
          </div>
        </div>
      </button>
    );
  }
}

export default SingerCard;
