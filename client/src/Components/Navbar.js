import React from 'react';
import {
  Link
} from "react-router-dom";



function NavbarItem(props) {
  return (
    <Link onClick={props.hideItem} className={"navbar-item navbar-option" + (props.display ? " show" : "")} to={props.toPath}>{props.value}</Link>
  )
}


class Navbar extends React.Component {
  state = {
    display: false
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="navbar-item" id="logo" href="google.com">
            <img alt="logo" src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" />
          </a>

          <NavbarItem display={this.state.display} hideItem={() => this.setState({display: false})} value="Form" toPath="/form" />
          <NavbarItem display={this.state.display} hideItem={() => this.setState({display: false})} value="Spending Details" toPath="/spending-details" />

          <a className={"navbar-item" + (this.state.display ? " active-hamburger" : "")} id="hamburger" href="#" onClick={() => this.setState({ display: !this.state.display })}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </a>
        </nav >
        <div className="navbar-buffer"></div>
      </div>
    )

  }
}


export default Navbar;