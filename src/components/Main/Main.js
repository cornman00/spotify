import React, { Component } from "react";
import SingerBox from "./SingerBox";
import axios from "axios";
import "../../App.css";

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
    if (this.state.keyword === "") {
      alert("Enter Search Keyword");
    }
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
      <div className="container">
        <div className="main">
          <form onSubmit={this.handleSubmit}>
            <label className="header" htmlFor="search">
              Explore New Artists
            </label>
            <span>
              <input
                className="search-box"
                type="search"
                value={this.state.keyword}
                onChange={this.handleChange}
                name="keyword"
                placeholder="Search artists..."
              />

              <button className="submit-btn" type="submit" value="Submit">
                Search
              </button>
            </span>
          </form>
          <br />

          {this.state.artists.map((elem) => (
            <SingerBox images={elem.images} name={elem.name} id={elem.id} />
          ))}

          <br />
        </div>
      </div>
    );
  }
}

export default Main;
