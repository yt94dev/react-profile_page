import React from 'react';
import classnames from 'classnames';
import ChangeEmail from './emailComponents/ChangeEmail';
import SaveNewEmail from './emailComponents/SaveNewEmail';
import CancelEmail from './emailComponents/CancelEmail';


class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmailFieldValue: this.props.value
    }

    this.checkDefaultState = this.checkDefaultState.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleCancelEmail = this.handleCancelEmail.bind(this);
  }

  checkDefaultState() {
    if ((this.props.emailState.changeEmail === false) && (this.props.emailState.saveNewEmail === false) && (this.props.emailState.cancelEmail === false)) {
      this.props.handleChangeEmailStates(true, false, false);
    }
  }

  handleChangeEmail(event){
    this.setState({newEmailFieldValue: event.target.value});
  }

  handleCancelEmail(event){
    this.setState({newEmailFieldValue: this.props.value});
  }

  render() {
    let activeButton = classnames("input-field edit-email", {
      "hold over": ((this.props.emailState.changeEmail === true) || (this.props.emailState.saveNewEmail === true) || (this.props.emailState.cancelEmail === true)),
      "hold checkYourEmail": (this.props.emailState.cancelEmail === true)
    });

    let emailState = null;
    let defaultEmail = this.state.newEmailFieldValue;

    if (this.props.emailState.changeEmail) {
      emailState = <ChangeEmail handleChangeEmailStates={this.props.handleChangeEmailStates} />
    } else if (this.props.emailState.saveNewEmail) {
      emailState = <SaveNewEmail handleChangeEmailStates={this.props.handleChangeEmailStates} />
    } else if (this.props.emailState.cancelEmail) {
      emailState = <CancelEmail handleChangeEmailStates={this.props.handleChangeEmailStates} handleCancelEmail={this.handleCancelEmail} />
    }

    let readProperty = null;

    if ((this.props.emailState.changeEmail === true) || (this.props.emailState.cancelEmail === true)) {
      readProperty = 'readOnly';
    } else {
      readProperty = null;
    }


    return (
      <div className={activeButton}>
        <input placeholder="Enter here" className="validate" id="roleEmail" type="email" onClick={(e) => {this.checkDefaultState(); this.props.handleChangePasswordStates(false, false);}} onChange={this.handleChangeEmail} readOnly={readProperty} value={defaultEmail} />
        <label htmlFor="roleEmail" data-error="Error text" className="active">Email</label>
        <div className="checkYourEmail">
            <p>***Please check your email at <a href="">{this.state.newEmailFieldValue}</a> to verify the address</p>
        </div>
        <div className="helper-container">
            <a href="" id="resendEmail">Resent Email <span>·</span></a>
            {emailState}
        </div>
      </div>)
  }
}

export default Email
