import { useLocation } from "react-router-dom";

const SideBar = () => {

    const { pathname } = useLocation();

    const pageTitleMap = {
        "/": "Dashboard 🏠",
        "/student": "Students 🧑‍🎓",
        "/attendance": "Attendance 📅",
        "/fee": "Fee Management 💰",
        "/teacher-management": "Teacher Management 💰",
        "/fee-management": "Fee Management 💰",
    };

     const title = pageTitleMap[pathname] || "School SaaS"; // fallback

    return <>
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="text-sm text-gray-500">
                Total Active Students: <span className="font-semibold text-blue-600">1,280</span>
            </div>
        </header>
    </>
}

export default SideBar;