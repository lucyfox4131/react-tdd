import React, { Component } from 'react';

function Header({names}) {
  if(names.length > 0){
    return <h1>{names.toString()}</h1>
  } else {
    return <h1>'Nothing here yet :('</h1>
  }
}

class List extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      current: '',
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
    this.setState({ names: names, current: '' })
  }

  render() {
    const { current, names } = this.state;

    return (
      <div className='content'>
        <Header names={names} />
        <input onChange={this.handleChange} value={current} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default List;
