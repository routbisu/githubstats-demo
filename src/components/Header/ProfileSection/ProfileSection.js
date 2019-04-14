import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../../actions/authActions";
import "./ProfileSection.scss";

class ProfileSection extends Component {
  render() {
    const user = this.props.userDetails;

    return (
      <div className="profile-section">
        <img src={user.avatar_url} alt={user.name} className="profile-avatar" />
        <span className="user-name">
          {user.name}
          <span onClick={this.props.logout}>Logout</span>
        </span>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(ProfileSection);
