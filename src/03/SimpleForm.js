import React, { Component, PropTypes } from 'react';

class SimpleForm extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className='add-new-form'>
        <h1>{this.props.title}</h1>
        <input type='text' id='add-new-song'></input>
        <label for='add-new-song'></label>
        <button></button>
      </div>
    );
  }
}

SimpleForm.PropTypes = {
  title: React.PropTypes.string,
  inputFieldPlaceholder: React.PropTypes.string,
};

export default SimpleForm;
