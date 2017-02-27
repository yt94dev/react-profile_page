import React from 'react';

class State3 extends React.Component{
  render(){
    return(<div className="email-helper state-3" onClick={(e) => {this.props.handleChangeEmailStates(false, false, false); this.props.handleCancelEmail();}}>Cancel</div>)
  }
}

export default State3
