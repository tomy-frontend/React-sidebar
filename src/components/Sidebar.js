import React from "react";
import { SidebarData } from "./SidebarData"; // 名前付きインポート
import SidebarIcon from "./SidebarIcon"; // デフォルトインポート

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon" className="icon">
                {value.icon}
              </div>
              <div id="title" className="title">
                {value.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
