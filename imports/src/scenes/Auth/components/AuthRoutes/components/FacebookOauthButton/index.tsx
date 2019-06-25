import * as React from "react";
import { Meteor } from "meteor/meteor";
import { toast } from "react-toastify";

const handleConnect = (onClose: () => void) => {
  Meteor.loginWithFacebook(
    { requestPermissions: ["public_profile", "email"] },
    function(err) {
      if (err) {
        toast.error(err.message);
      } else {
        onClose();
      }
    }
  );
};

const FacebookOauthButton: React.FC<{ onClose: () => void }> = ({
  onClose
}) => {
  return (
    <button
      onClick={() => handleConnect(onClose)}
      type="button"
      className="button is-fullwidth  is-link"
    >
      <span>Connect with Facebook</span>
    </button>
  );
};

export default FacebookOauthButton;
