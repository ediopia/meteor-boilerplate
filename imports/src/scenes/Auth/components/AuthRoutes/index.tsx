import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import NosOauthButton from "./components/NosOauthButton";
import FacebookOauthButton from "./components/FacebookOauthButton";

interface IProps {
  onClose: () => void;
}

const AuthRoutes: React.FC<IProps> = props => {
  return (
    <MemoryRouter initialEntries={[`/auth`]}>
      <FacebookOauthButton {...props} />
      <NosOauthButton {...props} />
    </MemoryRouter>
  );
};

export default AuthRoutes;
