import * as React from "react";
const Sidebar = require("react-sidebar");
import Helmet from "react-helmet";
import { withTracker } from "meteor/react-meteor-data";
import { useState, useEffect } from "react";
import { userDataLoader } from "../../services/data-loaders";

import { DEFAULT_DESKTOP_WIDTH } from "./services/consts";

import DashboardNav from "./components/SidebarNav";
import DashboardHeader from "./components/DashboardHeader";
import Login from "../Auth/scenes/Login";

import { RouteComponentProps } from "react-router-dom";

interface DashboardProps {
  user: any;
  isLoggingIn: boolean;
}

const Dashboard: React.FC<DashboardProps & RouteComponentProps> = ({
  user,
  isLoggingIn,
  match,
  history
}) => {
  if (isLoggingIn) return <div />;
  if (!user) return <Login />;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const isDesktop = width >= DEFAULT_DESKTOP_WIDTH;

  const [isSidebarOpen, setSidebarOpen] = useState(isDesktop);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    history.listen(() => {
      if (!isDesktop) {
        setSidebarOpen(false);
        setMenuOpen(false);
      }
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isDesktop) {
      setSidebarOpen(false);
    }
  };

  return (
    <div id="dashboard">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboardHeader
        user={user}
        isMenuOpen={isMenuOpen}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        toggleMenu={toggleMenu}
        redirect={history.push}
      />
      <Sidebar
        docked={isDesktop ? isSidebarOpen : false}
        open={isDesktop ? false : isSidebarOpen}
        rootClassName="sidebar-wrapper"
        sidebarClassName="sidebar"
        overlayClassName="sidebar-overlay"
        sidebar={<DashboardNav path={match.path} />}
        onSetOpen={toggleSidebar}
      >
        <div />
      </Sidebar>
    </div>
  );
};

export default withTracker(userDataLoader)(Dashboard);
