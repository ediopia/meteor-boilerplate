import React from "react";
import { render } from "react-dom";
import { Meteor } from "meteor/meteor";

import App from "../../src/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});
