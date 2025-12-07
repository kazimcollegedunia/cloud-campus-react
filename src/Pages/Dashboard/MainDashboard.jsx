const Dashboard = () => {
    return <>
        <section className="p-6 space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Total Students</p>
                    <h3 className="text-3xl font-bold mt-1">1,280</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Total Teachers</p>
                    <h3 className="text-3xl font-bold mt-1">85</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Today Attendance</p>
                    <h3 className="text-3xl font-bold mt-1 text-green-600">94%</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-gray-500 text-sm">Pending Fees</p>
                    <h3 className="text-2xl font-bold mt-1 text-red-600">₹ 2,45,000</h3>
                </div>

            </div>

            {/* <!-- CHART / BOX AREA --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-2">
                    <h3 className="font-semibold text-gray-700 mb-2">Attendance Graph</h3>
                    <div className="h-56 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-500">
                      📊 Graph Placeholder (Recharts or Chart.js)
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-gray-700 mb-3">Quick Actions</h3>
                    <ul className="space-y-2 text-blue-600 font-medium">
                        <li>➕ Add New Student</li>
                        <li>🧑‍🏫 Add Teacher</li>
                        <li>📅 Mark Attendance</li>
                        <li>💰 Generate Fee Invoice</li>
                    </ul>
                </div>

            </div>
            </section>
            </>
}

export default Dashboard;