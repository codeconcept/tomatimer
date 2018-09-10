import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';

class Timer extends Component {
  state = {
    initialValue: 5,
    duration: 5,
    handle: 0,
    message: ''
  };

  count = () => {
    this.setState({
      duration: parseInt(this.state.duration, 10) -1
    });
    if(this.state.duration === 0) {
      this.clean();
      this.setState({
        duration: this.state.initialValue
      });
    }
  };

  clean = (message = 'Compte à rebours réinitialisé') => {
    clearInterval(this.state.handle);   
    this.setState({
      message: message
    })
  }

  start = () => {
    const handle = setInterval(() => {
      this.count();
    }, 1000);
  
    this.setState({
      handle: handle,
      message: ''
    });
  }

  stop = () => {
    this.clean('Mis en pause');
  }

  reset = () => {
    this.clean();
    this.setState({
      duration: this.state.initialValue
    })
  }  

  prependZero = value => {
    return value < 10 ? "0"+ value.toString() : value.toString();
  };

  formatDuration = () => {
    const minutes = Math.floor(this.state.duration / 60);
    const seconds = Math.floor(this.state.duration % 60);
    return `${this.prependZero(minutes)}:${this.prependZero(seconds)}`;
  }

  componentDidMount() {
    this.setState({
      initialValue: parseInt(this.props.duration, 10) * 60,
      duration: parseInt(this.props.duration, 10) * 60
    })
  }

  componentWillUnmount() {
    this.clean();
  }

  render() { 
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2 style={{marginLeft: 15}}>Durée : {this.formatDuration()}</h2> 
        <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />
        <div>{this.state.message}</div>
      </div>
    );
  }
}
 
export default Timer;