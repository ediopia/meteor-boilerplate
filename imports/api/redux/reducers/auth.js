import produce from "immer/dist/immer";
import {CLOSE_AUTH_MODAL, OPEN_AUTH_MODAL} from "../consts/actionTypes";

const init = {
	isAuthModalActive: false
};

const auth = (state = init, action) =>
	produce(state, draft => {
		switch (action.type) {
			case OPEN_AUTH_MODAL:
				draft.isAuthModalActive = true;
				break;

			case CLOSE_AUTH_MODAL:
				draft.isAuthModalActive = false;
				break;
		}
	});

export default auth;
