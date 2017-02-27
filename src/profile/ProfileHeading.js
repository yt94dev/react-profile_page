import React from 'react';
import HeadingSimpleButton from './HeadingSimpleButton';
import HeadingMenuButton from './HeadingMenuButton';

class ProfileHeading extends React.Component{
  render() {

    return(
      <div className="sensors-specific_top-row">
        <h3 className="profile_service-name">User profile</h3>

        <HeadingMenuButton buttonName="owner" />

        <HeadingSimpleButton buttonName="admin" />
      </div>
            )
  }
}

export default ProfileHeading
