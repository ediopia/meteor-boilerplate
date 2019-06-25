import * as React from "react";
import { ToastContainer } from "react-toastify";
import Helmet from "react-helmet";
import Home from "./scenes/Home";
import { Route } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Meteor react boilerplate</title>
      </Helmet>
      <ToastContainer />
      <Route exact={true} path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
};
export default App;
