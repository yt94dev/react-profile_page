import React from 'react';
import classnames from 'classnames';

class MenuButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuExpanded: false,
      formExpanded: false
    }

    this.handleButtonMouseOver = this.handleButtonMouseOver.bind(this);
    this.handleButtonMouseLeave = this.handleButtonMouseLeave.bind(this);
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleButtonMouseOver() {
    if (this.props.menuExpanded === false) {
      this.setState({menuExpanded: true});
    }
  }

  handleButtonMouseLeave() {
    this.setState({menuExpanded: false});
  }

  handleMenuButtonClick() {
    if (this.props.menuExpanded === false) {
      this.props.handleMenuButtonClick();
      this.setState({formExpanded: true});
    }
  }

  submitForm() {
    this.setState({formExpanded: false});
  }


  render() {
    let intershipClassName = classnames("profile-change_user_section",
                                        {"hov_intership": (this.state.menuExpanded === true)},
                                        {"show_form": (this.state.formExpanded === true)});


    let buttonClassName = "profile_service-state " + this.props.buttonName,
        buttonName = this.props.buttonName.replace(/\b\w/g, l => l.toUpperCase());


    return(<div className={intershipClassName}
                onMouseEnter={this.handleButtonMouseOver}
                onMouseLeave={this.handleButtonMouseLeave} >

              <a className={buttonClassName}>{buttonName}</a>

              <div className="transfer_internship waves-effect waves-light" onClick={this.handleMenuButtonClick}>
                Transfer internship
              </div>

              <div className="profile-changeUser">
                <input type="email" placeholder="Enter a New Owner" className="that_val" />
                <a className="waves-effect waves-light btn prof_apply" disabled="" onClick={(e) => {this.props.resetMenuState(); this.submitForm();}}>Apply</a>
                <input type="hidden" value="" className="put_val" />
              </div>
            </div>)
  }
}

export default MenuButton
