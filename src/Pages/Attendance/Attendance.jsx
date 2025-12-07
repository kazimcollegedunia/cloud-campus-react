const Attendance = () => {
    return <>
    <section className="p-6 space-y-6">

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* <!-- Filters --> */}
        <div className="bg-white rounded-2xl shadow-md p-5 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Filter Attendance</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <label className="block font-medium mb-1">Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Class</label>
              <select
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
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
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg"
              >
                Load Students
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-5 text-sm">
            <button
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg border border-green-300 hover:bg-green-200"
            >
              Mark All Present
            </button>
            <button
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg border border-red-300 hover:bg-red-200"
            >
              Mark All Absent
            </button>
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-200"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* <!-- Summary --> */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold mb-4">Today Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Total Students</span>
              <span className="font-semibold">40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600">Present</span>
              <span className="font-semibold text-green-600">36</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600">Absent</span>
              <span className="font-semibold text-red-600">4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Attendance %</span>
              <span className="font-semibold text-blue-600">90%</span>
            </div>
          </div>
        </div>

      </div>

      {/* <!-- ATTENDANCE TABLE --> */}
      <div className="bg-white rounded-2xl shadow-md p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Mark Attendance</h3>
          <button
            className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            Save Attendance
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="border-b py-3 px-3">#</th>
                <th className="border-b py-3 px-3">Student Name</th>
                <th className="border-b py-3 px-3">Roll No.</th>
                <th className="border-b py-3 px-3">Status</th>
                <th className="border-b py-3 px-3">Remarks</th>
              </tr>
            </thead>
            <tbody>

              <tr className="hover:bg-gray-50">
                <td className="border-b py-2.5 px-3">1</td>
                <td className="border-b py-2.5 px-3 font-medium">Aman Sharma</td>
                <td className="border-b py-2.5 px-3">10A-01</td>
                <td className="border-b py-2.5 px-3">
                  <div className="inline-flex items-center gap-2">
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name="s1" className="accent-green-600" checked />
                      <span className="text-xs">Present</span>
                    </label>
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name="s1" className="accent-red-600" />
                      <span className="text-xs">Absent</span>
                    </label>
                  </div>
                </td>
                <td className="border-b py-2.5 px-3">
                  <input
                    type="text"
                    placeholder="Optional"
                    className="w-full border rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="border-b py-2.5 px-3">2</td>
                <td className="border-b py-2.5 px-3 font-medium">Sara Khan</td>
                <td className="border-b py-2.5 px-3">10A-02</td>
                <td className="border-b py-2.5 px-3">
                  <div className="inline-flex items-center gap-2">
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name="s2" className="accent-green-600" />
                      <span className="text-xs">Present</span>
                    </label>
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name="s2" className="accent-red-600" checked />
                      <span className="text-xs">Absent</span>
                    </label>
                  </div>
                </td>
                <td className="border-b py-2.5 px-3">
                  <input
                    type="text"
                    placeholder="Fever"
                    className="w-full border rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="border-b py-2.5 px-3">3</td>
                <td className="border-b py-2.5 px-3 font-medium">Rohit Verma</td>
                <td className="border-b py-2.5 px-3">10A-03</td>
                <td className="border-b py-2.5 px-3">
                  <div className="inline-flex items-center gap-2">
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name="s3" className="accent-green-600" checked />
                      <span className="text-xs">Present</span>
                    </label>
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name="s3" className="accent-red-600" />
                      <span className="text-xs">Absent</span>
                    </label>
                  </div>
                </td>
                <td className="border-b py-2.5 px-3">
                  <input
                    type="text"
                    placeholder="Late by 5 min"
                    className="w-full border rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </section>
        </>
}

export default Attendance;