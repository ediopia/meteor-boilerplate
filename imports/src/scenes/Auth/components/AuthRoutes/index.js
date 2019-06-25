import React, { Component } from "react";
import { MemoryRouter } from "react-router-dom";
import NosOauthButton from "./components/NosOauthButton";
import FacebookOauthButton from "./components/FacebookOauthButton";

class AuthRoutes extends Component {
  render() {
    return (
      <MemoryRouter initialEntries={[`/auth`]}>
        <FacebookOauthButton {...this.props} />
        <NosOauthButton {...this.props} />
      </MemoryRouter>
    );
  }
}

AuthRoutes.propTypes = {};
AuthRoutes.defaultProps = {};

export default AuthRoutes;
