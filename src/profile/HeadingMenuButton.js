import React from 'react';
import classnames from 'classnames';

class HeadingMenuButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuExpanded: false,
      formExpanded: false
    }

    this.handleButtonMouseOver = this.handleButtonMouseOver.bind(this);
    this.handleButtonMouseLeave = this.handleButtonMouseLeave.bind(this);
    this.handleFormMouseLeave = this.handleFormMouseLeave.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleButtonMouseOver() {
    this.setState({menuExpanded: true});
  }

  handleButtonMouseLeave() {
    this.setState({menuExpanded: false});
  }

  handleFormMouseLeave(){
    this.setState({menuExpanded: false});
    this.setState({formExpanded: true});
  }

  submitForm(){
    this.setState({formExpanded: false});
  }

  render() {
    let intershipClassName = classnames("profile-change_user_section",
                                        {"hov_intership": (this.state.menuExpanded === true)},
                                        {"show_form": (this.state.formExpanded === true)});

                                        
    let buttonClassName = "profile_service-state " + this.props.buttonName;

    return(<div className={intershipClassName}
                onMouseEnter={this.handleButtonMouseOver}
                onMouseLeave={this.handleButtonMouseLeave} >

              <a className={buttonClassName}>
                  {this.props.buttonName}
              </a>


              <div className="transfer_internship waves-effect waves-light" onClick={this.handleFormMouseLeave}>
                  Transfer internship
              </div>

              <div className="profile-changeUser">
                  <input type="email" placeholder="Enter a New Owner" className="that_val" />
                  <a className="waves-effect waves-light btn prof_apply" disabled="" onClick={this.submitForm}>Apply</a>
                  <input type="hidden" value="" className="put_val" />
              </div>
          </div>)
  }
}

export default HeadingMenuButton
