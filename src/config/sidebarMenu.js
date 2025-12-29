import { PERMISSIONS } from "../constants/permissions";

export const SIDEBAR_MENU = [
  {
    label: "Dashboard",
    icon: "🏠",
    path: "/",
    permission: PERMISSIONS.DASHBOARD,
  },
  {
    label: "Students",
    icon: "🧑‍🎓",
    path: "/student",
    permission: PERMISSIONS.STUDENTS,
  },
  {
    label: "Attendance",
    icon: "📅",
    path: "/attendance",
    permission: PERMISSIONS.ATTENDANCE,
  },
  {
    label: "Fees",
    icon: "💰",
    path: "/fee",
    permission: PERMISSIONS.FEES,
  },
];