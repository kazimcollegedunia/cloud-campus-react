import { PERMISSIONS } from "../constants/permissions";

export const ADMIN_MENU = [
  {
    label: "Manage Salary",
    icon: "💼",
    path: "/admin/salary",
    permission: PERMISSIONS.MANAGE_SALARY,
  },
  {
    label: "Manage Teacher",
    icon: "🧑‍🏫",
    path: "/admin/teacher",
    permission: PERMISSIONS.MANAGE_TEACHER,
  },
  {
    label: "Manage Fee",
    icon: "💳",
    path: "/admin/fee",
    permission: PERMISSIONS.MANAGE_FEE,
  },
  {
    label: "Class & Section",
    icon: "🏫",
    path: "/admin/class-section",
    permission: PERMISSIONS.MANAGE_CLASS,
  },
];
