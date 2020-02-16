import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AcccessRoute = ({ component: RouteComponent, user }) => {

  return (
    <Route
      render={routeProps =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};