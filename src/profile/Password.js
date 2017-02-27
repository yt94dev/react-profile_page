import React from 'react';
import classnames from 'classnames';

class Password extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      passwordValue: this.props.passwordValue,
      firstNewPassword: '',
      secondNewPassword: '',
      equalNewPasswords: false,
      newPassword: ''
    }

    this.handleGetFirstNewPassword = this.handleGetFirstNewPassword.bind(this);
    this.handleGetSecondNewPassword = this.handleGetSecondNewPassword.bind(this);
    this.handleSaveNewPassword = this.handleSaveNewPassword.bind(this);
    this.comparePasswords = this.comparePasswords.bind(this);
    this.handlePasswordButtonClick = this.handlePasswordButtonClick.bind(this);
    this.handleCheckPasswordLength = this.handleCheckPasswordLength.bind(this);
  }

  handleGetFirstNewPassword(event){
    this.setState({firstNewPassword: event.target.value});
    this.handleSaveNewPassword(event.target.value);
    this.comparePasswords(event.target.value, this.state.secondNewPassword);
    this.handleCheckPasswordLength(event.target.value, this.state.secondNewPassword);
  }

  handleGetSecondNewPassword(event){
    this.setState({secondNewPassword: event.target.value});
    this.handleSaveNewPassword(event.target.value);
    this.comparePasswords(this.state.firstNewPassword, event.target.value);
    this.handleCheckPasswordLength(this.state.firstNewPassword, event.target.value);
  }

  handleSaveNewPassword(value){
    this.setState({newPassword: value});
  }

  comparePasswords(value1, value2) {
    if (value1 === value2) {
      this.setState({equalNewPasswords: true});
    } else {
      this.setState({equalNewPasswords: false});
    }
  }

  handlePasswordButtonClick() {
    if ((this.state.equalNewPasswords === true) && (this.handleCheckPasswordLength(this.state.firstNewPassword, this.state.secondNewPassword)) && (this.props.passwordState.passwordExpanded === true)) {
      this.setState({passwordValue: this.state.newPassword,
                      firstNewPassword: '',
                      secondNewPassword: '',
                      equalNewPasswords: false,
                      newPassword: ''
                    });
      this.props.handleChangePasswordStates(false, false);
    } else {


      if ((this.state.firstNewPassword.length > 0) || (this.state.secondNewPassword.length > 0)) {
        this.handleCheckPasswordLength(this.state.firstNewPassword, this.state.secondNewPassword);
      }

      this.props.handleChangePasswordStates(false, true);
    }
  }

  handleCheckPasswordLength(pas1, pas2) {
    if (pas1 !== pas2) {
      this.props.handleChangeError('Password and confirm password don’t match');
    } else if ((pas1.length > 0) && (pas1.length < 6))  {
      this.props.handleChangeError('Password must be at least 6 characters!');
    } else if (pas1.length === 0) {
      this.props.handleChangeError('');
    } else {
      this.props.handleChangeError('');
      return true;
    }
  }






  render() {
    let changePass = classnames({"open": (this.props.passwordState.changePassword === true),
                                 "open-more": (this.props.passwordState.passwordExpanded === true)
                               });

    let passwordButtonClassName = classnames({"state-1": (this.props.passwordState.changePassword === true),
                                              "state-2": ((this.props.passwordState.passwordExpanded === true) && ((this.state.newPassword === '') || ((this.props.passwordState.errorText) && (this.props.passwordState.errorText !== '')))),
                                              "state-3": ((this.props.passwordState.errorText === '') && (this.state.equalNewPasswords === true))
                                             });

    let inputClassName = classnames("validate", {"invalidin": ((this.props.passwordState.errorText) && (this.props.passwordState.errorText !== '') && (this.props.passwordState.passwordExpanded === true))});




    return(
      <div id="password-container" className={changePass}>
          <div className="input-field">
              <input placeholder="Enter here"
                     className={inputClassName}
                     id="accountPassword"
                     readOnly
                     type="password"
                     value={this.state.passwordValue}
                     onClick={(e) => {this.props.handleChangeEmailStates(false, false, false); this.props.handleChangePasswordStates(true, false); }} />
              <label htmlFor="accountPassword" data-error="Error text" className="active">Password</label>
          </div>
          <div id="changePass" onClick={(e) => {this.handlePasswordButtonClick();}} className={passwordButtonClassName}>{this.props.passwordState.buttonText}</div>
          <div className="input-field pass-more">
              <input placeholder="Enter here" className={inputClassName} onChange={(e) => this.handleGetFirstNewPassword(e)} id="accountPassword2" type="password" value={this.state.firstNewPassword} />
              <label htmlFor="accountPassword2" data-error="Error text" className="active"></label>
          </div>
          <div className="input-field pass-more">
              <input placeholder="Enter here" className={inputClassName} onChange={(e) => this.handleGetSecondNewPassword(e)} id="accountPassword3" type="password" value={this.state.secondNewPassword} />
              <label htmlFor="accountPassword3" data-error={this.props.passwordState.errorText} className="active"></label>
          </div>
      </div>
    )
  }
}

export default Password
