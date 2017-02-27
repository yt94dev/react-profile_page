import React from 'react';

class ChangeEmail extends React.Component {



  render(){
    return(<div className="email-helper state-1" onClick={(e) => this.props.handleChangeEmailStates(false, true, false)}>Change Email</div>)
  }
}

export default ChangeEmail
