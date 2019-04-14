import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.scss";
import ProfileSection from "./ProfileSection/ProfileSection";

class Header extends Component {
  render() {
    return (
      <header>
        <span className="main-header">Github Stats</span>
        {this.props.isLoggedIn ? (
          <ProfileSection userDetails={this.props.userDetails} />
        ) : null}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authState.isLoggedIn,
  userDetails: state.authState.userData
});

export default connect(
  mapStateToProps,
  null
)(Header);
