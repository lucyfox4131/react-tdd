import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      current: '',
    };
    this.header = this.header.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ current: event.target.value })
  }

  handleSubmit(event){
    let names = this.state.names
    names.push(this.state.current)
    this.setState({ names: names, current: '' })
    console.log("Header", this.header)
  }


  header(){
    if(this.state.names.length > 0){
      console.log("Hello")
      return names.toString()
    }else{
      console.log("World!")
      return 'Nothing here yet :('
    }
  }

  render() {
    return (
      <div className='content'>
        <h1>{this.header}</h1>
        <input onChange={this.handleChange} value={this.state.current} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default List;
