import React, { Component } from 'react'
import SimpleButton from './SimpleButton';
import MenuButton from './MenuButton';

class Row extends Component {
  render() {
    let adminButton = null,
        ownerButton = null;


    if (this.props.userdata.isAdmin === true) {
      adminButton = <SimpleButton buttonName={"admin"}
                                  userdata={this.props.userdata} />
    } else {
      adminButton = null;
    }

    if (this.props.userdata.isOwner === true) {
      ownerButton = <MenuButton buttonName={"owner"}
                                menuExpanded={this.props.menuExpanded}
                                handleMenuButtonClick={this.props.handleMenuButtonClick}
                                resetMenuState={this.props.resetMenuState} />
    } else {
      ownerButton = null;
    }

    return (
      <tr>
        <td>{this.props.userdata.username}</td>
        <td>{this.props.userdata.email}</td>
        <td>
          {adminButton}
          {ownerButton}
        </td>
      </tr>
    )
  }
}

export default Row
