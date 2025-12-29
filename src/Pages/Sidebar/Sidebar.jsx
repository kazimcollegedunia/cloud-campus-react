import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SideBar = () => {
  const location = useLocation();
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  /**
   * 🔥 NAV ITEM CLASS HANDLER
   * React Router NavLink se `isActive` milta hai
   */
  const navClass = ({ isActive }) =>
    `block py-2.5 px-4 rounded-md transition-all duration-200
     ${isActive
       ? "bg-white/10 text-white font-semibold"
       : "text-gray-300 hover:bg-white/10 hover:text-white"
     }`;

  /**
   * 🔥 AUTO OPEN ADMIN DROPDOWN
   * Agar admin ke kisi route par ho
   */
  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      setIsAdminOpen(true);
    }
  }, [location.pathname]);

  return (
    <aside className="w-64 bg-[#0e1b31] text-white flex flex-col h-screen sticky top-0 overflow-y-auto">

      {/* HEADER */}
      <div className="px-6 py-6 text-center border-b border-white/10">
        <h1 className="text-2xl font-bold">Cloud Campus</h1>
        <p className="text-xs text-gray-300 mt-1">Admin Panel</p>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-4 space-y-2 mt-6 text-sm">

        <NavLink to="/" end className={navClass}>
          🏠 Dashboard
        </NavLink>

        <NavLink to="/student" className={navClass}>
          🧑‍🎓 Students
        </NavLink>

        <NavLink to="/attendance" className={navClass}>
          📅 Attendance
        </NavLink>

        <NavLink to="/fee" className={navClass}>
          💰 Fees
        </NavLink>

        {/* ================= ADMIN ================= */}
        <button
          onClick={() => setIsAdminOpen(!isAdminOpen)}
          className={`w-full text-left py-2.5 px-4 rounded-md flex items-center justify-between transition
            ${isAdminOpen ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/10"}
          `}
        >
          <span>⚙️ Admin</span>
          <span
            className={`transition-transform duration-200 ${
              isAdminOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isAdminOpen && (
          <div className="ml-4 space-y-1">

            <NavLink to="/admin/salary" className={navClass}>
              💼 Manage Salary
            </NavLink>

            <NavLink to="/teacher-management" className={navClass}>
              🧑‍🏫 Manage Teacher
            </NavLink>

            <NavLink to="/fee-management" className={navClass}>
              💳 Manage Fee
            </NavLink>

            <NavLink to="/admin/class-section" className={navClass}>
              🏫 Class & Section
            </NavLink>

          </div>
        )}
        {/* ================= END ADMIN ================= */}

      </nav>

      {/* LOGOUT */}
      <NavLink
        to="/signin"
        className="m-4 py-2 bg-red-500 hover:bg-red-600 rounded-md font-medium text-sm text-center"
      >
        Logout ⏻
      </NavLink>

    </aside>
  );
};

export default SideBar;