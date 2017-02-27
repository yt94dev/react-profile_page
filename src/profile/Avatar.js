import React from 'react';

class Avatar extends React.Component{
  render() {
    let splitStr = this.props.userName.split(' '),
        firstLetter = splitStr[0].charAt(0).toLowerCase(),
        secondLetter = splitStr[1].charAt(0).toLowerCase();

    const userName = firstLetter + secondLetter;

    return(<div className="profile_left-col">
            <div className="profile_circle-qa">
              <h3>{userName}</h3>
                <label htmlFor="change_profile_photo"></label>
                <input type="file" className="hide" id="change_profile_photo" accept="image/*" />
              </div>
            </div>)
  }
}

export default Avatar
