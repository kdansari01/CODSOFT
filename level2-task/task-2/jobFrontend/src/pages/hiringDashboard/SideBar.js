import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "./Sidebar.css";

function Sidebar() {
  const isHiring = useSelector((state) => state.singleUser.singleUserData);
  //   console.log(isHiring);
  return (
    <aside className="sidebar bg-light">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/dashboard/account-management" className="sidebar-link">
            Account Management
          </Link>
        </li>
        {isHiring.role === "hiring" ? (
          <li className="list-group-item">
            <Link to="/dashboard/post-new-job" className="sidebar-link">
              Post Job
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
