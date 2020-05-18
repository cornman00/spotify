import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SingerCard from "./SingerCard";
import axios from "axios";

// import Modal from "./Modal";
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
      artist: "",
      tracks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ artist: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/search_result",
        {
          search: this.state.artist,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // async componentDidMount() {
  //   const res = await fetch("http://localhost:4000/api/");
  //   const singers = await res.json();
  //   this.setState({ singers });
  // }

  render() {
    return (
      <div className="main">
        {/* <div className="genres">
           <h2 className="header text-capitalize">
            top 10 tracks of famous singers
          </h2>
         </div>
         <div className="container">
           {this.state.singers.map((elem) => (
            <SingerCard
              image={elem.images}
              name={elem.name}
              tracks={this.state.tracks}
            />
          ))}
        </div> */}
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search an artist: </label>
          <span>
            <input
              type="search"
              value={this.state.artist}
              onChange={this.handleChange}
              name="search"
            />

            <button type="submit" value="Submit">
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default Main;
