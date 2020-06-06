import React, { Component } from "react";

export class TrackLists extends Component {
  render() {
    const { name, external_urls } = this.props;
    return (
      <li>
        {name}
        <a
          href={external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="badge badge-primary badge-pill"
          style={{ marginLeft: "2rem" }}
        >
          Play
        </a>
      </li>
    );
  }
}

export default TrackLists;
