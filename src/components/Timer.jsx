import React, { Component } from 'react';

import { toast } from "react-toastify";

import ButtonGroup from './ButtonGroup';
import Display from './Display';
import Message from './Message';

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

  notify = (text, type) => {
    toast[type](text, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000
    });
  };

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
    this.notify('en pause', 'success');
  }

  reset = () => {
    this.clean();
    this.setState({
      duration: this.state.initialValue
    });
    this.notify('réinitialisation', 'error');
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
        <Display title={this.props.title} timerValue={this.formatDuration()} />
        <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />
        <Message text={this.state.message} delay={1500}/>
      </div>
    );
  }
}
 
export default Timer;