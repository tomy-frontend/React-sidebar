import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SendIcon from "@mui/icons-material/Send";

// 名前付きエクスポート
// listの中の要素はこのファイルで扱う
export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "メール",
    icon: <EmailIcon />,
    link: "/mail",
  },
  {
    title: "アナリティクス",
    icon: <AnalyticsIcon />,
    link: "/analytics",
  },
  {
    title: "コンタクト",
    icon: <SendIcon />,
    link: "/contact",
  },
];
