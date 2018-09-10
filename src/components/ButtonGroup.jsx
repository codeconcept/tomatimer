import React, { Component } from "react";
import Button from './Button';

class ButtonGroup extends Component {
  render() {
    return (
      <div>
        <Button text='start' onBtnClick={this.props.onStart} btnCssClasses="btn btn-success ml-3"/>
        <Button text='stop' onBtnClick={this.props.onStop} btnCssClasses="btn btn-warning ml-3"/>
        <Button text='reset' onBtnClick={this.props.onReset} btnCssClasses="btn btn-danger ml-3" />
      </div>
    );
  }
}

export default ButtonGroup;
