import React, { Component } from "react";

const CardContext = React.createContext();

export class ContextManager extends Component {
  state = {
    artists: [],
    genres: [],
  };

  render() {
    return (
      <CardContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

const ContextConsumer = CardContext.Consumer;

export { ContextManager, ContextConmuser };
