import React, { Component } from 'react';

class Timer extends Component {
  state = {
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
    }
  };

  clean = () => {
    clearInterval(this.state.handle);   
    this.setState({
      message: 'Compte à rebours réinitialisé'
    })
  }

  componentDidMount() {
    const handle = setInterval(() => {
      this.count();
    }, 1000);

    this.setState({
      handle: handle
    });
  }

  componentWillUnmount() {
    this.clean();
  }

  render() { 
    return (
      <div>
        <h2>Pomodoro</h2>
        <h3>{this.state.message}</h3>
        <div>Durée : {this.state.duration}</div>
        
      </div>
    );
  }
}
 
export default Timer;