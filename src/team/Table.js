import React from 'react';
import Row from './table/Row';


class Table extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userData:[
        {
          username: 'Anatk',
          email: 'Anatk@company.com',
          isAdmin: true,
          isOwner: true,
        }, {
          username: 'Aviran',
          email: 'Aviran@company.com',
          isAdmin: false,
          isOwner: true,
        }, {
          username: 'Danielle',
          email: 'Danielle@company.com',
          isAdmin: false,
          isOwner: false,
        }, {
          username: 'Dany',
          email: 'Dany@company.com',
          isAdmin: false,
          isOwner: true,
        }, {
          username: 'Dvir',
          email: 'Dvir@company.com',
          isAdmin: false,
          isOwner: false,
        }, {
          username: 'Eedan',
          email: 'Eedan@company.com',
          isAdmin: true,
          isOwner: false,
        }, {
          username: 'Elad Stein',
          email: 'EladSt@company.com',
          isAdmin: true,
          isOwner: false,
        }, {
          username: 'Elyran Malka',
          email: 'ElyranMal@company.com',
          isAdmin: false,
          isOwner: false,
        }, {
          username: 'Gabi Bo',
          email: 'GabiBo@company.com',
          isAdmin: false,
          isOwner: false,
        }, {
          username: 'Kali',
          email: 'Kali@company.com',
          isAdmin: false,
          isOwner: false,
        }, {
          username: 'Libi',
          email: 'Libi@company.com',
          isAdmin: false,
          isOwner: false,
        }, {
          username: 'Noga',
          email: 'Noga@company.com',
          isAdmin: false,
          isOwner: false,
        }
      ],
      headingNames: ['Name', 'Email', 'Access'],
      menuExpanded: false,
      accessMenuOpened: false,
      leftAccessMenuOpened: false
    }


    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.resetMenuState = this.resetMenuState.bind(this);
  }

  handleMenuButtonClick() {
    if (this.state.menuExpanded === false) {
      this.setState({menuExpanded: true});
    }
  }

  resetMenuState() {
    this.setState({menuExpanded: false});
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            {this.state.headingNames.map((item, index) => <th key={index}>{item}</th>)}
          </tr>
          {this.state.userData.map((item, index) => <Row userdata={item}
                                                         key={index}
                                                         index={index}
                                                         menuExpanded={this.state.menuExpanded}
                                                         handleMenuButtonClick={this.handleMenuButtonClick}
                                                         resetMenuState={this.resetMenuState} />
          )}
        </tbody>
      </table>
    )
  }
}


export default Table
