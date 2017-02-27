import React, { Component } from 'react'
import Avatar from './Avatar';
import Profile from './Profile';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Eric Ericson',
      emailAdress: 'Eric.er@company.com',
      companyName: 'Eric.er@company.com',
      phone: '+972 - 526545976',
      emailState: {
        changeEmail: false,
        saveNewEmail: false,
        cancelEmail: false
      },
      passwordState: {
        changePassword: false,
        passwordExpanded: false,
        buttonText: '',
        errorText: ''
      }
    }

    this.handleChangeEmailStates = this.handleChangeEmailStates.bind(this);
    this.handleChangePasswordStates = this.handleChangePasswordStates.bind(this);
    this.handleChangeError = this.handleChangeError.bind(this);
  }

  handleChangeEmailStates(state1, state2, state3) {
    this.setState({emailState: {
                      changeEmail: state1,
                      saveNewEmail: state2,
                      cancelEmail: state3
                    }

    });
  }

  handleChangePasswordStates(state1, state2) {
    if ((state1 === true) && (state2 === false)) {
      if (this.state.passwordState.passwordExpanded === false) {
        this.setState({passwordState: {
                          changePassword: state1,
                          passwordExpanded: state2,
                          buttonText: 'Change Password',
                          errorText: ''
                        }
                      });
      }
    } else if ((state1 === false) && (state2 === true)) {
      let errorText = this.state.passwordState.errorText;
      this.setState({passwordState: {
                        changePassword: state1,
                        passwordExpanded: state2,
                        buttonText: 'Save New Password',
                        errorText: errorText
                      }
                    });
    } else {
      this.setState({passwordState: {
                        changePassword: state1,
                        passwordExpanded: state2,
                        buttonText: '',
                        errorText: ''
                      }
                    });
    }
  }

  handleChangeError(errorText) {
    let newPasswordState = this.state.passwordState;
    newPasswordState.errorText = errorText;
    this.setState({passwordState: newPasswordState});
  }

  render() {
    return (<div className="profile_page">
      <div className="container" id="app">
        <div className="row">
          <Avatar
            userName={this.state.userName} />
          <Profile
            userName={this.state.userName}
            emailAdress={this.state.emailAdress}
            companyName={this.state.companyName}
            phone={this.state.phone}
            emailState={this.state.emailState}
            passwordState={this.state.passwordState}
            handleChangeEmailStates={this.handleChangeEmailStates}
            handleChangePasswordStates={this.handleChangePasswordStates}
            handleChangeError={this.handleChangeError} />
        </div>
      </div>
    </div>)
  }
}

export default App
