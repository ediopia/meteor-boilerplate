import * as React from "react";
import className from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useReactRouter from "use-react-router";
import LoginButton from "./components/LoginButton";
import MobileMenuBarButton from "./components/MobileMenuBarButton";
import AuthModal from "../../scenes/Auth/scenes/Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const { history, location, match } = useReactRouter();
  useEffect(() =>
    history.listen(() => {
      setIsMenuOpen(false);
    })
  );
  return (
    <>
      <nav className={"navbar"}>
        <div className="container is-small">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Website
            </Link>
            <MobileMenuBarButton
              toggleMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <div
            className={className("navbar-menu", isMenuOpen ? "is-active" : "")}
          >
            <div className="navbar-end">
              <LoginButton onOpenAuthModal={() => setAuthModalOpen(true)} />
            </div>
          </div>
        </div>
      </nav>
      {isAuthModalOpen ? (
        <AuthModal onClose={() => setAuthModalOpen(false)} />
      ) : (
        false
      )}
    </>
  );
};

export default Header;
