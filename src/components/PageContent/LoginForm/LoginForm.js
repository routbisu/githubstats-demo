import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";

import "./LoginForm.scss";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  onChangeHandler = evt => {
    this.setState({ username: evt.target.value });
  };

  userLogin = e => {
    e.preventDefault();
    this.props.login(this.state.username);
  };

  render() {
    return (
      <div className="login-form">
        {this.props.loginFailed ? (
          <div className="err-message">Username not found.</div>
        ) : null}

        <form onSubmit={this.userLogin}>
          <input
            type="text"
            placeholder="Github username"
            onChange={this.onChangeHandler}
          />
          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginFailed: state.authState.loginFailed
});

export default connect(
  mapStateToProps,
  {
    login
  }
)(LoginForm);
