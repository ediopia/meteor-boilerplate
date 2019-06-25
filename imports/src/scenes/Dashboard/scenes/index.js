import React from "react";
import { Route, Switch } from "react-router-dom";

const DashboardRoutes = ({ path }) => {
  return (
    <div className="section is-small">
      <div className="container is-medium">
        <Switch>
          <Route
            exact
            path={path}
            component={() => false}
          />
        </Switch>
      </div>
    </div>
  );
};
export default DashboardRoutes;
