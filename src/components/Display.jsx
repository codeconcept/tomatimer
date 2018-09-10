import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <h2 style={{ marginLeft: 15 }}>Durée : {this.props.timerValue}</h2>
      </React.Fragment>
    );
  }
}

export default Display;
