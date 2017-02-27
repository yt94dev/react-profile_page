import React from 'react';
import Row from './table/Row';


class Table extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userData:[
        {
          username: '1',
          email: 'Anatk@company.com',
          isAdmin: true,
          isOwner: true,
          isViewer: true,
          isUser: true,
          checked: false
        }, {
          username: '2',
          email: 'Aviran@company.com',
          isAdmin: false,
          isOwner: true,
          isViewer: false,
          isUser: false,
          checked: false
        }, {
          username: '3',
          email: 'Danielle@company.com',
          isAdmin: false,
          isOwner: false,
          isViewer: false,
          isUser: false,
          checked: false
        }, {
          username: '4',
          email: 'Dany@company.com',
          isAdmin: false,
          isOwner: true,
          isViewer: false,
          isUser: false,
          checked: false
        }, {
          username: '5',
          email: 'Dvir@company.com',
          isAdmin: false,
          isOwner: false,
          isViewer: false,
          isUser: false,
          checked: false
        }, {
          username: '6',
          email: 'Eedan@company.com',
          isAdmin: true,
          isOwner: false,
          isViewer: false,
          isUser: false,
          checked: false
        }, {
          username: '7',
          email: 'EladSt@company.com',
          isAdmin: true,
          isOwner: false,
          isViewer: true,
          isUser: false,
          checked: false
        }, {
          username: '8',
          email: 'ElyranMal@company.com',
          isAdmin: false,
          isOwner: false,
          isViewer: false,
          isUser: false,
          checked: false
        }, {
          username: '9',
          email: 'GabiBo@company.com',
          isAdmin: false,
          isOwner: false,
          isViewer: false,
          isUser: true,
          checked: false
        }, {
          username: '10',
          email: 'Kali@company.com',
          isAdmin: false,
          isOwner: false,
          isViewer: false,
          isUser: false,
          checked: false
        }, {
          username: '11',
          email: 'Libi@company.com',
          isAdmin: false,
          isOwner: false,
          isViewer: true,
          isUser: false,
          checked: false
        }, {
          username: '12',
          email: 'Noga@company.com',
          isAdmin: false,
          isOwner: false,
          isViewer: false,
          isUser: false,
          checked: false
        }
      ],
      headingNames: ['', 'Name', 'Email', 'Access'],
      menuExpanded: false,
      accessMenuOpened: false,
      checkBoxMenuOpened: false,
      selectedCheckboxes: []
    }


    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.resetAccessMenuState = this.resetAccessMenuState.bind(this);
    this.resetMenuState = this.resetMenuState.bind(this);
    this.resetCheckBoxMenuState = this.resetCheckBoxMenuState.bind(this);
    this.handleAccessMenuOpen = this.handleAccessMenuOpen.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleCheckBoxMenuOpen = this.handleCheckBoxMenuOpen.bind(this);
    this.handleDeleteRows = this.handleDeleteRows.bind(this);
    this.handleSelectRow = this.handleSelectRow.bind(this);
    this.handleDeselectRow = this.handleDeselectRow.bind(this);
  }

  handleSelectRow(index) {
    let newUserData = this.state.userData,
        newSelectedCheckboxes = this.state.selectedCheckboxes;

    newUserData[index].checked = true;
    newSelectedCheckboxes.push(index);
    newSelectedCheckboxes.sort((a, b) => b-a);

    this.setState({userData: newUserData,
                   selectedCheckboxes: newSelectedCheckboxes});
  }

  handleDeselectRow(index) {
    let newUserData = this.state.userData,
        selectedCheckboxes = this.state.selectedCheckboxes,
        newSelectedCheckboxes = selectedCheckboxes.filter((el) => el !== index);

    newUserData[index].checked = false;

    this.setState({userData: newUserData,
                   selectedCheckboxes: newSelectedCheckboxes});
  }

  handleDeleteRows(index) {
    let newUserData = this.state.userData,
        selectedCheckboxes = this.state.selectedCheckboxes;

    for (let i = 0; i <= selectedCheckboxes.length - 1; i++) {
      newUserData.splice(selectedCheckboxes[i], 1);
    }

    this.setState({userData: newUserData,
                   selectedCheckboxes: []});
  }

  handleAddButton(id, itemsArray) {
    if (itemsArray.filter((el) => el.itemActive === true).length > 0) {
      let newUserData = this.state.userData,
          user = newUserData.filter((item, index) => index === id)[0],
          userNewAccess = 'is' + itemsArray.filter((el) => el.itemActive === true)[0].itemName;
      user[userNewAccess] = true;
      this.setState({userData: newUserData});
    }
  }

  handleDeleteButtonClick(buttonName, id) {
    let userData = this.state.userData,
        user = userData.filter((item, index) => index === id)[0];

    user['is' + buttonName] = false;

    this.setState({userData: userData});
  }

  handleAccessMenuOpen() {
    if (this.state.accessMenuOpened === false) {
      this.setState({accessMenuOpened: true});
    }
  }

  handleCheckBoxMenuOpen() {
    if (this.state.checkBoxMenuOpened === false) {
      this.setState({checkBoxMenuOpened: true});
    }
  }

  handleMenuButtonClick() {
    if (this.state.menuExpanded === false) {
      this.setState({menuExpanded: true});
    }
  }

  resetAccessMenuState() {
    this.setState({accessMenuOpened: false});
  }

  resetCheckBoxMenuState() {
    this.setState({checkBoxMenuOpened: false});
  }

  resetMenuState() {
    this.setState({menuExpanded: false});
  }

  render() {
    return (
      <div>

        <table>
          <tbody>
            <tr>
              {this.state.headingNames.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
            {this.state.userData.map((item, index) => <Row userdata={item}
                                                           key={index}
                                                           index={index}
                                                           menuExpanded={this.state.menuExpanded}
                                                           accessMenuOpened={this.state.accessMenuOpened}
                                                           handleDeleteButtonClick={this.handleDeleteButtonClick}
                                                           handleMenuButtonClick={this.handleMenuButtonClick}
                                                           resetMenuState={this.resetMenuState}
                                                           handleAccessMenuOpen={this.handleAccessMenuOpen}
                                                           resetAccessMenuState={this.resetAccessMenuState}
                                                           handleAddButton={this.handleAddButton}
                                                           resetCheckBoxMenuState={this.resetCheckBoxMenuState}
                                                           checkBoxMenuOpened={this.state.checkBoxMenuOpened}
                                                           handleCheckBoxMenuOpen={this.handleCheckBoxMenuOpen}
                                                           handleDeleteRows={this.handleDeleteRows}
                                                           handleSelectRow={this.handleSelectRow}
                                                           handleDeselectRow={this.handleDeselectRow}
                                                           checked={item.checked} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Table
