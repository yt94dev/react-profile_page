import React from 'react';
import SimpleTextInput from './SimpleTextInput';
import Email from './Email';
import Password from './Password';

class ProfileData extends React.Component{

  render() {
    return (
      <div id="tab1a" className="profile_tab-body">
          <SimpleTextInput id="accountName"
                          value={this.props.userName}
                          labelText="Name"
                          handleChangeEmailStates={this.props.handleChangeEmailStates}
                          handleChangePasswordStates={this.props.handleChangePasswordStates}
                          />
                        <Email value={this.props.emailAdress}
                 emailState={this.props.emailState}
                 handleChangeEmailStates={this.props.handleChangeEmailStates}
                 handleChangePasswordStates={this.props.handleChangePasswordStates}
                 />
          <SimpleTextInput  id="companyName"
                            value={this.props.companyName}
                            labelText="Company Name"
                            handleChangeEmailStates={this.props.handleChangeEmailStates}
                            handleChangePasswordStates={this.props.handleChangePasswordStates}
                            />
          <SimpleTextInput  id="phone"
                            value={this.props.phone}
                            labelText="Phone"
                            handleChangeEmailStates={this.props.handleChangeEmailStates}
                            handleChangePasswordStates={this.props.handleChangePasswordStates}
                            />
           <Password passwordValue="1234567890"
                     passwordState={this.props.passwordState}
                     handleChangeEmailStates={this.props.handleChangeEmailStates}
                     handleChangePasswordStates={this.props.handleChangePasswordStates}
                     handleChangeError={this.props.handleChangeError}
                     />
      </div>
    )
  }
}

export default ProfileData
