import React from 'react';

class SimpleButton extends React.Component{
  render() {
    let buttonClassName = "profile_service-state " + this.props.buttonName,
        buttonName = this.props.buttonName.replace(/\b\w/g, l => l.toUpperCase()),
        index = this.props.index;

    return(<div className="profile-change_user_section">
            <a className={buttonClassName}>
              <span className="first_span">Remove</span>
              <span className="second_span">{buttonName}</span>
              <span className="remove_admin" onClick={(e) => {this.props.handleDeleteButtonClick(buttonName, index)}}>x</span>
            </a>
          </div>)
  }
}

export default SimpleButton
