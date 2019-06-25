import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { history } from "../../../../../../../startup/client";
import { toast } from "react-toastify";

class NosOauthButton extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  };
  handleNosConnect = () => {
    let { onClose } = this.props;
    Meteor.loginWithNos(null, (err, result) => {
      if (err) {
        toast.error(err.message);
      } else {
        // history.push("/dashboard");
        onClose();
      }
    });
  };
  render() {
    return (
      <button
        onClick={this.handleNosConnect}
        type="button"
        className="button is-fullwidth"
      >
        <span>Connect with</span>
        <img
          style={{ marginLeft: "5px" }}
          width="35px"
          src={"./assets/nos.svg"}
        />
      </button>
    );
  }
}

export default NosOauthButton;
