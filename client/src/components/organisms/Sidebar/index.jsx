import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import "./SidebarStyle.scss";
const SideBar = ({ sidebarLink }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  return (
    <div className="sidebar-container">
      {sidebarLink.map(({ icon, label, path }, i) => (
        <Link
          to={path}
          key={`sidebar-${label}`}
          className={clsx(
            path.includes(currentPath) ? "bg-[#E9F3FF]" : "bg-transparent",
            "sidebar-link"
          )}
        >
          <span
            className={clsx(
              path.includes(currentPath) ? "sidebar-active" : "hidden"
            )}
          ></span>
          <span>{icon}</span>
          <span
            className={clsx(
              "font-medium text-lg",
              path.includes(currentPath) ? "text-[#336CFB]" : "text-[#52575C]"
            )}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
