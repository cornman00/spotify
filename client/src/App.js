import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import Albums from "./components/Albums/Albums";
import Navbar from "./components/Navbar";
import Tracks from "./components/Tracks/Tracks";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/albums/:id" component={Albums} />
          <Route exact path="/albums/tracks/:albumID" component={Tracks} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
