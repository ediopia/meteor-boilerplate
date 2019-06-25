import * as React from "react";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

interface LoginProps {
  user: any;
  isLoggingIn: boolean;
  onOpenAuthModal: () => void;
}

const LoginButton: React.FunctionComponent<LoginProps> = ({
  isLoggingIn,
  user,
  onOpenAuthModal
}) => {
  if (isLoggingIn) {
    return <div />;
  }
  return user ? (
    <Link to="/dashboard" className="navbar-item">
      Dashboard
    </Link>
  ) : (
    <a onClick={onOpenAuthModal} className="navbar-item">
      Sign in
    </a>
  );
};
export default withTracker((p: any) => {
  return {
    isLoggingIn: Meteor.loggingIn(),
    user: Meteor.user()
  };
})(LoginButton);
