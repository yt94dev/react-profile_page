import React from 'react';
import ProfileHeading from './ProfileHeading';
import ProfileData from './ProfileData';

class Profile extends React.Component{
  render() {
    return(
            <div className="profile_right-col">
              <ProfileHeading />
              <ProfileData
                userName={this.props.userName}
                emailAdress={this.props.emailAdress}
                companyName={this.props.companyName}
                phone={this.props.phone}
                emailState={this.props.emailState}
                passwordState={this.props.passwordState}
                handleChangeEmailStates={this.props.handleChangeEmailStates}
                handleChangePasswordStates={this.props.handleChangePasswordStates}
                handleChangeError={this.props.handleChangeError} />
            </div>)
  }
}

export default Profile
