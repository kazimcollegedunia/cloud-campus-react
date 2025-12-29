const Teacher = () => {
    return <>
        {/* // <!-- CONTENT --> */}
        <section className="p-6 space-y-6">
        {/* <!-- TOP: ADD STUDENT FORM --> */}
        <div className="bg-white rounded-2xl shadow-md p-5">
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Add New Teacher</h3>
            <span className="text-xs text-gray-500">Quick entry form</span>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                type="text"
                placeholder="Aman Sharma"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Class</label>
                <select
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <option value="">Select Class</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
                </select>
            </div>

            <div>
                <label className="block font-medium mb-1">Section</label>
                <select
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <option value="">Select Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                </select>
            </div>

            <div>
                <label className="block font-medium mb-1">Contact No.</label>
                <input
                type="text"
                placeholder="9876543210"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="md:col-span-3">
                <label className="block font-medium mb-1">Email</label>
                <input
                type="email"
                placeholder="self@gmail.com"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex items-end">
                <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg"
                >
                + Add Teacher
                </button>
            </div>
            </form>
        </div>

        {/* <!-- FILTERS + TABLE --> */}
        <div className="bg-white rounded-2xl shadow-md p-5">
            {/* <!-- Filters --> */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex gap-3 text-sm">
                <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>All Classes</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
                </select>
                <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>All Sections</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                </select>
            </div>

            <div className="flex gap-2">
                <input
                type="text"
                placeholder="Search by name or roll no..."
                className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-56"
                />
                <button
                className="px-4 py-2 text-sm bg-gray-100 rounded-lg border hover:bg-gray-200"
                >
                Search
                </button>
            </div>
            </div>

            {/* <!-- Table --> */}
            <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                <tr className="bg-gray-50 text-left">
                    <th className="border-b py-3 px-3">#</th>
                    <th className="border-b py-3 px-3">Teacher Name</th>
                    <th className="border-b py-3 px-3">Class</th>
                    <th className="border-b py-3 px-3">Section</th>
                    <th className="border-b py-3 px-3">Roll No.</th>
                    <th className="border-b py-3 px-3">Parent Contact</th>
                    <th className="border-b py-3 px-3">Status</th>
                    <th className="border-b py-3 px-3 text-right">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr className="hover:bg-gray-50">
                    <td className="border-b py-2.5 px-3">1</td>
                    <td className="border-b py-2.5 px-3 font-medium">Aman Sharma</td>
                    <td className="border-b py-2.5 px-3">Class 10</td>
                    <td className="border-b py-2.5 px-3">A</td>
                    <td className="border-b py-2.5 px-3">10A-01</td>
                    <td className="border-b py-2.5 px-3">9876543210</td>
                    <td className="border-b py-2.5 px-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        Active
                    </span>
                    </td>
                    <td className="border-b py-2.5 px-3 text-right space-x-2">
                    <button className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700">Edit</button>
                    <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700">Delete</button>
                    </td>
                </tr>

                <tr className="hover:bg-gray-50">
                    <td className="border-b py-2.5 px-3">2</td>
                    <td className="border-b py-2.5 px-3 font-medium">Sara Khan</td>
                    <td className="border-b py-2.5 px-3">Class 9</td>
                    <td className="border-b py-2.5 px-3">B</td>
                    <td className="border-b py-2.5 px-3">9B-12</td>
                    <td className="border-b py-2.5 px-3">9876543221</td>
                    <td className="border-b py-2.5 px-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        Active
                    </span>
                    </td>
                    <td className="border-b py-2.5 px-3 text-right space-x-2">
                    <button className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700">Edit</button>
                    <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700">Delete</button>
                    </td>
                </tr>

                <tr className="hover:bg-gray-50">
                    <td className="border-b py-2.5 px-3">3</td>
                    <td className="border-b py-2.5 px-3 font-medium">Rohit Verma</td>
                    <td className="border-b py-2.5 px-3">Class 8</td>
                    <td className="border-b py-2.5 px-3">C</td>
                    <td className="border-b py-2.5 px-3">8C-05</td>
                    <td className="border-b py-2.5 px-3">9876543331</td>
                    <td className="border-b py-2.5 px-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                        Inactive
                    </span>
                    </td>
                    <td className="border-b py-2.5 px-3 text-right space-x-2">
                    <button className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700">Edit</button>
                    <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </section>
    </>
}

export default Teacher;
    
    
    
    