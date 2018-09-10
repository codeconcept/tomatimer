import React, { Component } from 'react';

class Timer extends Component {
  state = {
    initialValue: 5,
    duration: 5,
    handle: 0,
    message: ''
  };

  count = () => {
    this.setState({
      duration: parseInt(this.state.duration) -1
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

  componentWillUnmount() {
    this.clean();
  }

  render() { 
    return (
      <div>
        <h2>Pomodoro</h2>
        <div>Durée : {this.state.duration}</div>
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
        </div>
        <div>{this.state.message}</div>
      </div>
    );
  }
}
 
export default Timer;