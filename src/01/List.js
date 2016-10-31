import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      current: '',
    };
    // this.handleChange = this.handleChange.bind(this),
    // this.handleSubmit = this.handleSubmit.bind(this),
  }

  handleChange(event){
    this.setState({current: event.target.value})
  }

  handleSubmit(event){
    let currentWord = this.state.current
    let names = this.state.names
    names.push(currentWord)
    this.setState({names: names})
  }

  render() {
    return (
      <div className='content'>
        <input onChange={this.handleChange} value={this.state.current} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}


export default List;
