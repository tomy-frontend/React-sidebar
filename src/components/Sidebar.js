import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";

function Sidebar({ isOpen }) {
  return (
    <nav
      id="Sidebar"
      className={`Sidebar ${isOpen ? "open" : ""}`}
      aria-label="メインナビゲーション"
      aria-hidden={!isOpen}
    >
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((item, index) => {
          const isActive = window.location.pathname === item.link;

          return (
            <li key={index}>
              <a
                href={item.link}
                className={`row ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="title">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
