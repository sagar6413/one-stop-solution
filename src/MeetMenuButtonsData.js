import {
  faVideo,
  faPlusSquare,
  faCalendarAlt,
  faShareAltSquare,
} from "@fortawesome/free-solid-svg-icons";
export const menu_buttons = [
  {
    id: 1,
    path: "/meeting-room",
    icon: faVideo,
    cNameDiv: "menubuttons__button color__orange",
    cNameButton: "fa",
    text: "New meeting",
  },
  {
    id: 2,
    path: "/meeting-room",
    icon: faPlusSquare,
    cNameDiv: "menubuttons__button",
    cNameButton: "fa",
    text: "Join meeting",
  },
  {
    id: 3,
    path: "/",
    icon: faCalendarAlt,
    cNameDiv: "menubuttons__button",
    cNameButton: "fa",
    text: "Schedule call",
  },
  {
    id: 4,
    path: "/",
    icon: faShareAltSquare,
    cNameDiv: "menubuttons__button",
    cNameButton: "fa",
    text: "Share Meeting",
  },
];
