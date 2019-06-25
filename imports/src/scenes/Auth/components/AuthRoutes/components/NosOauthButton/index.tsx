import * as React from "react";
import { Meteor } from "meteor/meteor";
import { toast } from "react-toastify";

const handleNosConnect = (onClose: () => void) => {
  Meteor.loginWithNos(null, (err) => {
    if (err) {
      toast.error(err.message);
    } else {
      // history.push("/dashboard");
      onClose();
    }
  });
};

const NosOauthButton: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <button
      onClick={() => handleNosConnect(onClose)}
      type="button"
      className="button is-success is-fullwidth"
    >
      <span>Connect with nOS</span>
    </button>
  );
};

export default NosOauthButton;
