import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SingerCard from "./SingerCard";

var Spotiyfy = require("spotify-web-api-js");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: "http://localhost:8888/callback",
});

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singers: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:4000/api/");
    const json = await res.json();
    this.setState({ singers: json });
  }

  render() {
    return (
      <div className="main">
        <div className="genres">
          <h2 className="header text-capitalize">
            top 10 tracks of famous singers
          </h2>
        </div>
        <div className="container">
          {this.state.singers.map((elem) => (
            <SingerCard image={elem.images} name={elem.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
