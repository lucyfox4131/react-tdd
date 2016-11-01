import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      current: '',
      header: 'Nothing here yet :(',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ current: event.target.value })
  }

  handleSubmit(event){
    let names = this.state.names
    names.push(this.state.current)
    this.setState({ names: names, header: names.toString() })
  }

  render() {
    return (
      <div className='content'>
        <h1>{this.state.header}</h1>
        <input onChange={this.handleChange} value={this.state.current} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default List;
