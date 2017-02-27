import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames';
import SimpleButton from './SimpleButton';
import MenuButton from './MenuButton';

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [{itemName: 'Admin',
                  itemActive: false
                  },
                  {itemName: 'Owner',
                  itemActive: false
                  },
                  {itemName: 'Viewer',
                  itemActive: false
                  },
                  {itemName: 'User',
                  itemActive: false
                  }],
      accessMenuExpanded: false,
      checkBoxMenuExpanded: false,
    }

    this.handleAccessButtonClick = this.handleAccessButtonClick.bind(this);
    this.handleAccessMenuCloseClick = this.handleAccessMenuCloseClick.bind(this);
    this.handleAccessMenuClose = this.handleAccessMenuClose.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.checkDisabledButton = this.checkDisabledButton.bind(this);
    this.checkBoxMenuHandler = this.checkBoxMenuHandler.bind(this);
    this.handleCheckBoxMenuCloseClick = this.handleCheckBoxMenuCloseClick.bind(this);
    this.handleCheckBoxMenuClose = this.handleCheckBoxMenuClose.bind(this);
    this.handleSelectRow = this.handleSelectRow.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleAccessMenuCloseClick);
    window.removeEventListener('click', this.handleCheckBoxMenuCloseClick);
  }

  checkBoxMenuHandler(event) {
    if((this.props.checkBoxMenuOpened === false) && (this.props.menuExpanded === false) && (this.props.accessMenuOpened === false)) {
      this.setState({checkBoxMenuExpanded: true});
      this.props.handleCheckBoxMenuOpen();
      event.stopPropagation();
      window.addEventListener('click', this.handleCheckBoxMenuCloseClick);
    }
  }

  handleAccessButtonClick(event) {
    if ((this.props.checkBoxMenuOpened === false) && (this.props.menuExpanded === false) && (this.props.accessMenuOpened === false)) {
      this.setState({accessMenuExpanded: true});
      this.props.handleAccessMenuOpen();
      event.stopPropagation();
      window.addEventListener('click', this.handleAccessMenuCloseClick);
    }
  }

  handleCheckBoxMenuCloseClick(event) {
    const checkBoxMenuArea = ReactDOM.findDOMNode(this.checkBoxAccessMenu);

    if(!checkBoxMenuArea.contains(event.target)) {
      this.handleCheckBoxMenuClose();
    }
    event.stopPropagation();
  }

  handleAccessMenuCloseClick(event) {
    const area = ReactDOM.findDOMNode(this.accessMenu);
    if (!area.contains(event.target)) {
      this.handleAccessMenuClose();
    }

    event.stopPropagation();
  }

  handleCheckBoxMenuClose() {
    this.props.resetCheckBoxMenuState();
    this.setState({checkBoxMenuExpanded: false});
    window.removeEventListener('click', this.handleCheckBoxMenuCloseClick);
  }

  handleAccessMenuClose() {
    this.props.resetAccessMenuState();
    let resetActiveItems = this.state.menuItems;
    resetActiveItems.map((item) => item.itemActive = false);
    this.setState({menuItems: resetActiveItems,
                  accessMenuExpanded: false});
    window.removeEventListener('click', this.handleAccessMenuCloseClick);
  }

  handleMenuItemClick(index) {
    if (this.checkDisabledButton(this.state.menuItems[index].itemName) !== true) {
      let newMenuItemsState = this.state.menuItems;
      newMenuItemsState[index].itemActive = true;
      newMenuItemsState.filter((el, id) => id !== index).map((el) => el.itemActive = false);
      this.setState({menuItems: newMenuItemsState});
    }
  }

  checkDisabledButton(itemName) {
    if (this.props.userdata['is' + itemName] === true) {
      return true;
    } else {
      return false;
    }
  }

  handleSelectRow(event) {
    if (event.target.checked === true) {
      this.props.handleSelectRow(this.props.index);
    } else {
      this.props.handleDeselectRow(this.props.index);
    }
  }

  render() {
    let adminButton = null,
        ownerButton = null,
        viewerButton = null,
        userButton = null;


    if (this.props.userdata.isAdmin === true) {
      adminButton = <SimpleButton buttonName={"admin"}
                                  handleDeleteButtonClick={this.props.handleDeleteButtonClick}
                                  index={this.props.index}
                                  userdata={this.props.userdata} />
    } else {
      adminButton = null;
    }

    if (this.props.userdata.isOwner === true) {
      ownerButton = <MenuButton buttonName={"owner"}
                                menuExpanded={this.props.menuExpanded}
                                accessMenuOpened={this.props.accessMenuOpened}
                                handleMenuButtonClick={this.props.handleMenuButtonClick}
                                resetMenuState={this.props.resetMenuState} />
    } else {
      ownerButton = null;
    }

    if (this.props.userdata.isViewer === true) {
      viewerButton = <SimpleButton buttonName={"viewer"}
                                   handleDeleteButtonClick={this.props.handleDeleteButtonClick}
                                   index={this.props.index}
                                   userdata={this.props.userdata} />
    } else {
      viewerButton = null;
    }

    if (this.props.userdata.isUser === true) {
      userButton = <SimpleButton buttonName={"user"}
                                 handleDeleteButtonClick={this.props.handleDeleteButtonClick}
                                 index={this.props.index}
                                 userdata={this.props.userdata} />
    } else {
      userButton = null;
    }

    let accessMenuClassName = classnames({"adding_new_access": (this.state.accessMenuExpanded === true)});
    let checkBoxMenuClassName = classnames('select_section', {"click_hover": (this.state.checkBoxMenuExpanded === true)});

    return (
      <tr>
        <td>
          <p>
            <input type="checkbox" checked={this.props.checked} onChange={this.handleSelectRow} className="filled-in" id={'row' + this.props.index} />
            <label htmlFor={'row' + this.props.index}></label>
          </p>
          <div className={checkBoxMenuClassName}>
            <div className="select_arrow" onClick={this.checkBoxMenuHandler}></div>
            <div className="select_buttons" ref={(ref) => this.checkBoxAccessMenu = ref}>
              <button className="btn select_edit">Edit</button>
              <button className="btn select_archive">Archive</button>
              <button className="btn select_delete"
                      onClick={(e) => {this.props.handleDeleteRows(); this.handleCheckBoxMenuClose()}}>Delete</button>

            </div>
          </div>
        </td>
        <td>{this.props.userdata.username}</td>
        <td>{this.props.userdata.email}</td>
        <td className={accessMenuClassName}>
          {adminButton}
          {ownerButton}
          {viewerButton}
          {userButton}
          <div className="add_new_access">
            <img src="img/add-user.png" alt="" onClick={this.handleAccessButtonClick} className="new_access_img" />
            <div className="adding_access">
              <input type="text" className="input_new_access" placeholder="Add to group..." />
              <div className="new_access" ref={(ref) => this.accessMenu = ref}>
                <div className="admin_or_owner">
                  {this.state.menuItems.map((item, index) => (
                      <div key={index}>
                        <input type="radio" className="hide with-gap" name="changeUserAccess" id={this.props.index + '_' + item.itemName}
                               disabled={this.checkDisabledButton(item.itemName)}
                               checked={item.itemActive}
                               />
                             <label htmlFor={this.props.index + '_' + item.itemName} onClick={(event) => {this.handleMenuItemClick(index)}}>
                               <span>{item.itemName}</span>
                             </label>
                      </div>
                  ))}
                </div>
                <a className="waves-effect waves-light btn apply_access"
                   onClick={(event) => {this.props.handleAddButton(this.props.index, this.state.menuItems); this.handleAccessMenuClose();}}>Apply</a>
                <input type="hidden" className="put_access" />
              </div>
            </div>
          </div>
        </td>
      </tr>
    )
  }
}

export default Row
