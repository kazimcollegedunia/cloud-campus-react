import { Link } from "react-router-dom";
const SideBar = () => {
    return <>
        <aside className="w-64 bg-[#0e1b31] text-white flex flex-col h-screen sticky top-0 overflow-y-auto">
            <div className="px-6 py-6 text-center border-b border-white/10">
            <h1 className="text-2xl font-bold">Cloud Campus</h1>
            <p className="text-xs text-gray-300 mt-1">Admin Panel</p>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-6 text-sm">
                <Link to="/" className="block py-2.5 px-4 rounded-md bg-white/10" >🏠 Dashboard </Link>
                <Link to="/student" className="block py-2.5 px-4 rounded-md hover:bg-white/10" >🧑‍🎓 Students</Link>
                <Link to="/attendance" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">📅 Attendance</Link>
                <Link to="/fee" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">💰 Fees</Link>
                <Link to="/testing" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">💰 Testing</Link>
                {/* <Link to="/teacher" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">🧑‍🏫 Teachers</a>
                <Link to="/attendance" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">📅 Attendance</a>
                <Link to="/fee" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">💰 Fees</a>
                <Link to="/library" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">📚 Library</a> */}
            </nav>

            <Link  to="/signin" className="m-4 py-2 bg-red-500 hover:bg-red-600 rounded-md font-medium text-sm text-center">Logout ⏻</Link>
        </aside>
    </>
}

export default SideBar;