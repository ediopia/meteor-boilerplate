import * as React from "react";
import { ToastContainer } from "react-toastify";
import Helmet from "react-helmet";
import Home from "./scenes/Home";
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Meteor react boilerplate</title>
      </Helmet>
      <ToastContainer />
      <Route exact={true} path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
};
export default App;
