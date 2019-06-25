import * as React from "react";
import classNames from "classnames";
import { Meteor } from "meteor/meteor";
import MobileMenuBarButton from "imports/src/components/Header/components/MobileMenuBarButton";

interface IProps {
  user: object;
  isSidebarOpen: boolean;
  isMenuOpen: boolean;
  toggleSidebar: () => void;
  toggleMenu: () => void;
  redirect: (path: string) => void;
}

const DashboardHeader: React.FC<IProps> = ({
  redirect,
  user,
  isSidebarOpen,
  isMenuOpen,
  toggleSidebar,
  toggleMenu
}) => {
  return (
    <nav className="navbar is-fixed-top-touch is-primary">
      <div className="navbar-brand">
        <a
          className={classNames(
            "navbar-item",
            isSidebarOpen ? "is-active" : ""
          )}
          onClick={toggleSidebar}
        >
          <span className="icon">
            <i className="fas fa-bars" />
          </span>
          <span> Menu</span>
        </a>
        <MobileMenuBarButton toggleMenuOpen={toggleMenu} />
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
