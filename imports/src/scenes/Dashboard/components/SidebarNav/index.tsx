import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import SignoutButton from "../SignoutButton/index";

const DashboardNav: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div>
      <div style={{ padding: "24px" }}>
        <ul className="menu-list">
          <li>
            <NavLink to={`${path}/create/lottery`} activeClassName="is-active">
              Create lottery
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}/create/raffle`} activeClassName="is-active">
              Create raffle
            </NavLink>
          </li>
          <li>
            <Link to={`${path}/mining`}>Mining center</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNav;
