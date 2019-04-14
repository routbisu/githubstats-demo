import React, { Component } from "react";
import UserDetails from "./UserDetails/UserDetails";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";

class PageContent extends Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <UserDetails />
        ) : (
          <LoginForm onLogin={this.onLoginHandler} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authState.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(PageContent);
