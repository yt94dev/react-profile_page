import React from 'react';

class SimpleButton extends React.Component{
  render() {
    let buttonClassName = "profile_service-state " + this.props.buttonName,
        buttonName = this.props.buttonName.replace(/\b\w/g, l => l.toUpperCase());

    return(<div className="profile-change_user_section">
            <a className={buttonClassName}>{buttonName}</a>
          </div>)
  }
}

export default SimpleButton
