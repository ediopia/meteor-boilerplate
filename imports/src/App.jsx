import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import {Helmet} from "react-helmet";
import Home from "./scenes/Home";
import {Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
	      <Helmet>
		      <title>Meteor react boilerplate</title>
	      </Helmet>
	      <ToastContainer />
	      <Route exact={true} path="/" component={Home} />
      </div>
    );
  }
}
export default App;
