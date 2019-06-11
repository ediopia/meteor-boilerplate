import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Meteor } from "meteor/meteor";

import App from "../../src/App.jsx";
import store from "../../api/redux/store/configureStore";


export const history = createBrowserHistory();

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

Meteor.startup(() => {
	render(<Root />, document.getElementById("render-target"));
});
