const InvoiceTable = (props) => {
    const tableData = props.data;
    return <>
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

              {/* <tr className="hover:bg-gray-50">
                <td className="border-b py-2.5 px-3 font-mono text-xs">INV-2025-001</td>
                <td className="border-b py-2.5 px-3 font-medium">Aman Sharma</td>
                <td className="border-b py-2.5 px-3">10 A</td>
                <td className="border-b py-2.5 px-3">April 2025</td>
                <td className="border-b py-2.5 px-3 font-semibold">₹ 66,500</td>
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
              </tr> */}
              {tableData.length > 0 ? (
                tableData.map((list, index) => (
                  <tr key={list.user_id} className="hover:bg-gray-50">
                    <td className="border-b py-2.5 px-3 font-mono text-xs">{list.receipt_no??'N/A'} {list.user_id}</td>
                    <td className="border-b py-2.5 px-3 font-medium">{list.user.name}</td>
                    <td className="border-b py-2.5 px-3">{list.class_id} {list.section}</td>
                    <td className="border-b py-2.5 px-3">April 2025</td>
                    <td className="border-b py-2.5 px-3 font-semibold">₹ 66,500</td>
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
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-3">
                    Not Found...
                  </td>
                </tr>
              )}
            </tbody>

              {/* <tr className="hover:bg-gray-50">
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
              </tr> */}
          </table>
        </div>

      </div>
    </>
}

export default InvoiceTable;