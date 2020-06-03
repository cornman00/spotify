import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as spotifyLogo } from "../spotifyLogo.svg";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light"
        style={{
          backgroundColor: "black",
          height: "3rem",
          fontSize: "20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <Link to="/">Spotify</Link>
      </nav>
    );
  }
}

export default Navbar;
