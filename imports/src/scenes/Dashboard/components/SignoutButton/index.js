import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {handleSignOut} from "../../../../../api/redux/actions/authActions";

@connect(
  null,
  dispatch => ({
    onSignout: props => dispatch(handleSignOut(props))
  })
)
class SignoutButton extends Component {
  static propTypes = {
    onSignout: PropTypes.func.isRequired
  };
  render() {
    return (
      <div
        className="has-background-light"
        style={{
          position: "absolute",
          bottom: 0,
          padding: "24px",
          width: "100%"
        }}
      >
        <a className="has-text-grey-dark" onClick={this.props.onSignout}>
          <span className="icon">
            <i className="fas fa-sign-out-alt" />
          </span>
          <span>Sign out</span>
        </a>
      </div>
    );
  }
}

export default SignoutButton;
