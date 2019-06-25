import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { toast } from "react-toastify";

class FacebookOauthButton extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  };
  handleNosConnect = () => {
    let { onClose } = this.props;
	  Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
		  if (err) {
		  	console.log(err)
			  toast.error(err.message);
		  }else{
			  onClose()
			  // history.push("/dashboard");
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
        <span>Connect with Facebook</span>
      </button>
    );
  }
}

export default FacebookOauthButton;
