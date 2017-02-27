import React from 'react';

class SaveNewEmail extends React.Component{


  render(){
    return(<div className="email-helper state-2" onClick={(e) => this.props.handleChangeEmailStates(false, false, true)}>Save New Email</div>)
  }
}

export default SaveNewEmail
