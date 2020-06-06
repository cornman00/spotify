import React, { Component } from "react";
import axios from "axios";
import AlbumCard from "./AlbumCard";
import "../../App.css";

export class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: undefined };
    this.getAlbums = this.getAlbums.bind(this);
  }

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums() {
    const {
      match: { params },
    } = this.props;

    (async () => {
      try {
        const res = await axios.get(
          `/albums/${encodeURIComponent(params.id)}`,
          {
            params: {
              id: params.id,
            },
          }
        );
        this.setState({ albums: res.data });
      } catch (err) {
        console.log("Albums data fetch failed: " + err);
      }
    })();
  }

  render() {
    return (
      <>
        <div className="container ">
          <div className="row justify-content-center">
            {this.state.albums &&
              this.state.albums.map((item) => (
                <AlbumCard
                  img={item.images[0]}
                  name={item.name}
                  release_date={item.release_date}
                  albumID={item.id}
                  key={item.id}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Albums;
