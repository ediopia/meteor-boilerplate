import { history } from "../../../startup/client";
import {CLOSE_AUTH_MODAL, OPEN_AUTH_MODAL} from "../consts/actionTypes";

export const handleOpenAuthModal = () => dispatch => {
  dispatch({
    type: OPEN_AUTH_MODAL
  });
};

export const handleCloseAuthModal = () => dispatch => {
  dispatch({
    type: CLOSE_AUTH_MODAL
  });
};

export const handleSignOut = () => dispatch => {
  if (window.confirm("Do you want to sign out?")) {
    dispatch({
      type: CLOSE_AUTH_MODAL
    });
    Meteor.logout(()=> {
	    history.push("/");
    })
  }
};
