import React, { Component } from "react";

class ButtonGroup extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.onStart}>start</button>
        <button onClick={this.props.onStop}>stop</button>
        <button onClick={this.props.onReset}>reset</button>
      </div>
    );
  }
}

export default ButtonGroup;
