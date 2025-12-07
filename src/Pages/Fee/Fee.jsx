const Fee = () => {
    return <>
    <section className="p-6 space-y-6">

      {/* <!-- STATS ROW --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <p className="text-xs text-gray-500 uppercase font-semibold">Total Collected</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-1 text-emerald-600">₹ 8,75,000</h3>
          <p className="text-xs text-gray-400 mt-1">This month</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5">
          <p className="text-xs text-gray-500 uppercase font-semibold">Pending Amount</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-1 text-amber-600">₹ 2,45,000</h3>
          <p className="text-xs text-gray-400 mt-1">From 56 students</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5">
          <p className="text-xs text-gray-500 uppercase font-semibold">Overdue</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-1 text-red-600">₹ 95,000</h3>
          <p className="text-xs text-gray-400 mt-1">More than 30 days</p>
        </div>
      </div>

      {/* <!-- FILTERS + NEW INVOICE --> */}
      <div className="bg-white rounded-2xl shadow-md p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h3 className="text-lg font-semibold">Filter Invoices</h3>
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-semibold">
            + Create New Invoice
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
          <div>
            <label className="block font-medium mb-1">Class</label>
            <select
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option>All Classes</option>
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
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option>All</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Due Before</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-end gap-2">
            <button
              className="w-full px-4 py-2 bg-gray-100 rounded-lg border text-sm hover:bg-gray-200">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* <!-- INVOICES TABLE --> */}
      <div className="bg-white rounded-2xl shadow-md p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Fee Invoices</h3>
          <button
            className="px-4 py-2 text-sm bg-gray-100 rounded-lg border hover:bg-gray-200">
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="border-b py-3 px-3">Invoice #</th>
                <th className="border-b py-3 px-3">Student</th>
                <th className="border-b py-3 px-3">Class</th>
                <th className="border-b py-3 px-3">Month</th>
                <th className="border-b py-3 px-3">Amount</th>
                <th className="border-b py-3 px-3">Due Date</th>
                <th className="border-b py-3 px-3">Status</th>
                <th className="border-b py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>

              <tr className="hover:bg-gray-50">
                <td className="border-b py-2.5 px-3 font-mono text-xs">INV-2025-001</td>
                <td className="border-b py-2.5 px-3 font-medium">Aman Sharma</td>
                <td className="border-b py-2.5 px-3">10 A</td>
                <td className="border-b py-2.5 px-3">April 2025</td>
                <td className="border-b py-2.5 px-3 font-semibold">₹ 3,500</td>
                <td className="border-b py-2.5 px-3">05 Apr 2025</td>
                <td className="border-b py-2.5 px-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Paid
                  </span>
                </td>
                <td className="border-b py-2.5 px-3 text-right space-x-2">
                  <button className="px-3 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200">
                    View
                  </button>
                  <button className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Receipt
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="border-b py-2.5 px-3 font-mono text-xs">INV-2025-019</td>
                <td className="border-b py-2.5 px-3 font-medium">Sara Khan</td>
                <td className="border-b py-2.5 px-3">9 B</td>
                <td className="border-b py-2.5 px-3">April 2025</td>
                <td className="border-b py-2.5 px-3 font-semibold">₹ 3,200</td>
                <td className="border-b py-2.5 px-3">05 Apr 2025</td>
                <td className="border-b py-2.5 px-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700">
                    Pending
                  </span>
                </td>
                <td className="border-b py-2.5 px-3 text-right space-x-2">
                  <button className="px-3 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200">
                    Reminder
                  </button>
                  <button className="px-3 py-1 text-xs rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    Mark Paid
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="border-b py-2.5 px-3 font-mono text-xs">INV-2025-034</td>
                <td className="border-b py-2.5 px-3 font-medium">Rohit Verma</td>
                <td className="border-b py-2.5 px-3">8 C</td>
                <td className="border-b py-2.5 px-3">March 2025</td>
                <td className="border-b py-2.5 px-3 font-semibold">₹ 3,000</td>
                <td className="border-b py-2.5 px-3 text-red-600 font-medium">05 Mar 2025</td>
                <td className="border-b py-2.5 px-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">
                    Overdue
                  </span>
                </td>
                <td className="border-b py-2.5 px-3 text-right space-x-2">
                  <button className="px-3 py-1 text-xs rounded-md bg-orange-100 text-orange-700 hover:bg-orange-200">
                    Send Notice
                  </button>
                  <button className="px-3 py-1 text-xs rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    Mark Paid
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </section>
        </>
}

export default Fee;
