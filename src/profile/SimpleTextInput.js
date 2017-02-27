import React from 'react';

class SimpleTextInput extends React.Component{
  render() {

    return(
      <div className="input-field">
        <input placeholder="Enter here" className="validate" id={this.props.id} type="text" onClick={(e) => {this.props.handleChangeEmailStates(false, false, false); this.props.handleChangePasswordStates(false, false);}} defaultValue={this.props.value} />
        <label htmlFor={this.props.id} data-error="Error text" className="active">{this.props.labelText}</label>
      </div>)
  }
}

export default SimpleTextInput
