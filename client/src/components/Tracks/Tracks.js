import React, { Component } from "react";
import axios from "axios";
import TrackLists from "./TrackLists";
import "../../App.css";

export class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = { tracks: undefined };
    this.getTracks = this.getTracks.bind(this);
  }

  componentDidMount() {
    this.getTracks();
  }

  async getTracks() {
    const {
      match: { params },
    } = this.props;

    try {
      const res = await axios.get(
        `/albums/tracks/${encodeURIComponent(params.albumID)}`,
        {
          params: {
            albumID: params.albumID,
          },
        }
      );
      console.log(res.data);
      this.setState({ tracks: res.data });
    } catch (err) {
      console.log("Track data fetch failed: " + err);
    }
  }

  render() {
    const tracks = this.state.tracks;

    return (
      <div className="container tracks">
        <h2>Tracks</h2>
        <ul>
          {tracks &&
            tracks.map((item) => (
              <TrackLists name={item.name} external_urls={item.external_urls} />
            ))}
        </ul>
      </div>
    );
  }
}

export default Tracks;
