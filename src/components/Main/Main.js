import React, { Component } from "react";
import SingerCard from "./SingerCard";
import axios from "axios";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      artists: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ keyword: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/search_result",
        {
          keyword: this.state.keyword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ artists: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search an artist: </label>
          <span>
            <input
              type="search"
              value={this.state.keyword}
              onChange={this.handleChange}
              name="keyword"
            />

            <button type="submit" value="Submit">
              Search
            </button>
          </span>
        </form>
        <br />

        <div className="container">
          {this.state.artists.map((elem) => (
            <SingerCard
              images={elem.images}
              name={elem.name}
              artists={this.state.artists}
            />
          ))}
          {console.log("Arists are: " + this.state.artists)}
        </div>
        <br />
      </div>
    );
  }
}

export default Main;
