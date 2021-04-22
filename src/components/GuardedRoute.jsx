import React from "react";
import { Route } from "react-router-dom";

const GuardedRoute = ({ component: Component, authToken, ...rest }) => (
  <Route {...rest} render={() => authToken && <Component />} />
);

export default GuardedRoute;
