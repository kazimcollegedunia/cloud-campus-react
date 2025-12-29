import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { hasPermission } from "../../utils/hasPermission";
import { SIDEBAR_MENU } from "../../config/sidebarMenu";
import { ADMIN_MENU } from "../../config/adminMenu";
import {clearAccessToken } from "../../auth/token";

const SideBar = () => {
  const { user } = useAuth();
  // This is only for testing 
//   let { user } = useAuth();
//   user = {roel:"admin"};
  

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `block py-2.5 px-4 rounded-md transition
     ${
       isActive
         ? "bg-white/10 text-white font-semibold"
         : "text-gray-300 hover:bg-white/10"
     }`;

  return (
    <>
      {/* ================= MOBILE TOGGLE ================= */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#0e1b31] text-white p-2 rounded-md"
      >
        ☰
      </button>

      {/* ================= OVERLAY ================= */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-[#0e1b31] text-white flex flex-col
        transform transition-transform duration-300
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* HEADER */}
        <div className="px-6 py-6 text-center border-b border-white/10">
          <h1 className="text-2xl font-bold">Cloud Campus</h1>
          <p className="text-xs text-gray-300 mt-1">{user.name??"Panel"}</p>
        </div>

        {/* NAV */}
        <nav className="flex-1 px-4 space-y-2 mt-6 text-sm overflow-y-auto">

          {/* MAIN MENU */}
          {SIDEBAR_MENU.map(
            (item) =>
              hasPermission(user.role, item.permission) && (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navClass}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.icon} {item.label}
                </NavLink>
              )
          )}

          {/* ADMIN MENU */}
          {ADMIN_MENU.some((m) => hasPermission(user.role, m.permission)) && (
            <>
              <button
                onClick={() => setIsAdminOpen(!isAdminOpen)}
                className="w-full text-left py-2.5 px-4 rounded-md hover:bg-white/10 flex justify-between text-gray-300"
              >
                ⚙️ Admin
                <span>{isAdminOpen ? "▲" : "▼"}</span>
              </button>

              {isAdminOpen &&
                ADMIN_MENU.map(
                  (item) =>
                    hasPermission(user.role, item.permission) && (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={navClass}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.icon} {item.label}
                      </NavLink>
                    )
                )}
            </>
          )}
        </nav>

        {/* LOGOUT (BOTTOM FIXED) */}
        <Link
          to="/signin"
          onClick={() => clearAccessToken()}
        //   clearAccessToken()
          className="m-4 py-2 bg-red-500 hover:bg-red-600 rounded-md font-medium text-sm text-center"
        >
          Logout ⏻
        </Link>
      </aside>
    </>
  );
};

export default SideBar;