const InvoiceSummary = () => {
    return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
}

export default InvoiceSummary;