import React from 'react';

class HeadingSimpleButton extends React.Component{
  render() {

    let buttonClassName = "profile_service-state " + this.props.buttonName;

    return(<div className="profile-change_user_section">
              <a className={buttonClassName}>
                  {this.props.buttonName}
              </a>
          </div>)
  }
}

export default HeadingSimpleButton
