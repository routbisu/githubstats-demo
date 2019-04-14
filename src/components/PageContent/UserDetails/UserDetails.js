import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserDetails.scss";

class UserDetails extends Component {
  render() {
    const user = this.props.userDetails;

    return (
      <div className="user-details">
        <table>
          <tbody>
            <tr>
              <td rowSpan="4" width="10%">
                <img
                  src={user.avatar_url}
                  className="avatar-pic"
                  alt={user.name}
                />
              </td>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{user.company}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{user.location}</td>
            </tr>
            <tr>
              <th>Repositories</th>
              <td>{user.public_repos}</td>
            </tr>
          </tbody>
        </table>
        <div className="user-bio">{user.bio}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.authState.userData
});

export default connect(
  mapStateToProps,
  null
)(UserDetails);
