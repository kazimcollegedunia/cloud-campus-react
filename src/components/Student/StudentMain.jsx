import StudentTable from "./StudentTable"
import StudentFrom from "./StudentFrom"

const student = () => {    
    return <>
        <div className="flex min-h-screen">
            {/* <!-- SIDEBAR --> */}
            <aside className="w-64 bg-[#0e1b31] text-white flex flex-col h-screen sticky top-0 overflow-y-auto">
                <div className="px-6 py-6 text-center border-b border-white/10">
                <h1 className="text-2xl font-bold">School SaaS</h1>
                <p className="text-xs text-gray-300 mt-1">Admin Panel</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-6 text-sm">
                <a href="#" className="block py-2.5 px-4 rounded-md hover:bg-white/10">🏠 Dashboard</a>
                <a href="#" className="block py-2.5 px-4 rounded-md bg-white/10">🧑‍🎓 Students</a>
                <a href="#" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">🧑‍🏫 Teachers</a>
                <a href="#" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">📅 Attendance</a>
                <a href="#" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">💰 Fees</a>
                <a href="#" className="block py-2.5 px-4 rounded-md hover:bg-white/10 text-gray-300">📚 Library</a>
                </nav>

                <button className="m-4 py-2 bg-red-500 hover:bg-red-600 rounded-md font-medium text-sm">Logout</button>
            </aside>

            {/* <!-- MAIN AREA --> */}
            <main className="flex-1 flex flex-col">

                {/* <!-- TOP HEADER --> */}
                <header className="h-16 bg-white shadow flex items-center justify-between px-6">
                <h2 className="text-xl font-semibold">Students</h2>
                <div className="text-sm text-gray-500">
                    Total Active Students: <span className="font-semibold text-blue-600">1,280</span>
                </div>
                </header>

                {/* <!-- CONTENT --> */}
                <section className="p-6 space-y-6">

                {/* <!-- TOP: ADD STUDENT FORM --> */}
                <StudentFrom/>

                {/* <!-- FILTERS + TABLE --> */}
                
                    <StudentTable />
                </section>
            </main>
        </div>
    </>
}

export default student;