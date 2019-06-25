import * as React from "react";
import * as Sidebar from "react-sidebar";
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

  const [width, setWidth] = useState(window.innerWidth);
  const isDesktop = width >= DEFAULT_DESKTOP_WIDTH;
  const [isSidebarOpen, setSidebarOpen] = useState(isDesktop);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    history.listen(() => {
      if (!isDesktop) {
        setSidebarOpen(false);
      }
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });


	return (
    <div id="dashboard">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboardHeader
	      user={user}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
	      redirect={history.push}
	      historyListener={history.listen}
      />
      <Sidebar
        docked={isDesktop ? isSidebarOpen : false}
        open={isDesktop ? false : isSidebarOpen}
        rootClassName="sidebar-wrapper"
        sidebarClassName="sidebar"
        overlayClassName="sidebar-overlay"
        sidebar={<DashboardNav path={match.path} />}
        onSetOpen={() => setSidebarOpen(!isSidebarOpen)}
      >
        <div />
      </Sidebar>
    </div>
  );
};

export default withTracker(userDataLoader)(Dashboard);
