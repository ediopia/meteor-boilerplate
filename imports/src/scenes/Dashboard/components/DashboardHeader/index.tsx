import * as React from "react";
import classNames from "classnames";
import { Meteor } from "meteor/meteor";
import { useState } from "react";
import { useEffect } from "react";
import MobileMenuBarButton from "imports/src/components/Header/components/MobileMenuBarButton";

interface IProps {
  user: object;
  toggleSidebar: () => void;
  redirect: (path: string) => void;
  historyListener: (l: () => void) => void;
}

const DashboardHeader: React.FC<IProps> = ({
  redirect,
  user,
  historyListener,
  toggleSidebar
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() =>
    historyListener(() => {
      setIsMenuOpen(false);
    })
  );
  return (
    <nav className="navbar is-fixed-top-touch is-primary">
      <div className="navbar-brand">
        <a className="navbar-item" onClick={toggleSidebar}>
          <span className="icon">
            <i className="fas fa-bars" />
          </span>
          <span> Menu</span>
        </a>
        <MobileMenuBarButton
          toggleMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={classNames("navbar-menu", isMenuOpen ? "is-active" : "")}>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Settings</a>
            <div className="navbar-dropdown is-right">
              {/*<hr className="navbar-divider" />*/}
              <a
                onClick={() =>
                  Meteor.logout(() => {
                    redirect("/");
                  })
                }
                className="navbar-item"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
