export const sidebarData = [
  { id: 1, title: "Dashboard", url: "/dashboard", iconType: "LayoutDashboard" },
  { id: 2, title: "Messages", url: "/messages", iconType: "MessageCircle" },
  { id: 3, title: "Publishing", url: "/Publishing", iconType: "SquarePen" },
  { id: 4, title: "Analytics", url: "/Analytics", iconType: "BarChartBig" },
  {
    id: 5,
    title: "Collaboration",
    url: "/Collaboration",
    iconType: "LibraryBig",
  },
  { id: 6, title: "Accounts", url: "/Accounts", iconType: "Users" },
];

const isProd = false;
export const BASE_URL = isProd
  ? "https://full-edge-scrawny-profit-beta.pipeops.app/api/v1"
  : "http://127.0.0.1:8000/api/v1";
