import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/Info";
import ChannelIcon from "@mui/icons-material/LibraryBooks";
import TestIcon from "@mui/icons-material/ChildCare";
import MeetIcon from "@mui/icons-material/CameraFront";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "sidebar__text",
  },
  {
    title: "Channels",
    path: "/channels",
    icon: <ChannelIcon />,
    cName: "sidebar__text",
  },
  {
    title: "Tests",
    path: "/tests",
    icon: <TestIcon />,
    cName: "sidebar__text",
  },
  {
    title: "About",
    path: "/about",
    icon: <AboutIcon />,
    cName: "sidebar__text",
  },
  {
    title: "Meet",
    path: "/meet",
    icon: <MeetIcon />,
    cName: "sidebar__text",
  },
];
