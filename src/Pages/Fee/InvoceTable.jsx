import {useState} from 'react';

const InvoiceTable = (props) => {

  const [showPaidModal, setShowPaidModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

    const handleMarkAsPaid = (invoice) => {
      console.log("invoice",invoice);
      setSelectedInvoice(invoice); // only this row
      setShowPaidModal(true);
  };

    const tableData = props.data;
    const feeTypes = props.feeTypes;
    const getStatusClass = (status) => {
      switch (status) {
        case 'Pending':
          return 'bg-amber-100 text-amber-700';
        case 'Overdue':
          return 'bg-rose-100 text-rose-700';
        case 'Paid':
          return 'bg-green-100 text-green-700';
        case 'paid':
          return 'bg-green-100 text-green-700';
        default:
          return 'bg-gray-100 text-gray-700';
      }
    };
    // console.log(tableData);
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
                <th className="border-b py-3 px-3 text-center">Actions</th>
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
                    <td className="border-b py-2.5 px-3 font-mono text-xs">{list.receipt_no??'N/A'} </td>
                    <td className="border-b py-2.5 px-3 font-medium">{list.student_name}</td>
                    <td className="border-b py-2.5 px-3">{list.class_id} {list.section}</td>
                    <td className="border-b py-2.5 px-3">{list.due_date}</td>
                    <td className="border-b py-2.5 px-3 font-semibold">₹ {list.fee_type_amount??'NA'}</td>
                    <td className="border-b py-2.5 px-3">1st - {list.due_date}</td>
                    <td className="border-b py-2.5 px-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusClass(list.status)} text-amber-700`}>
                        {list.status}
                      </span>
                    </td>
                      <td className="border-b py-2.5 px-3 text-right space-x-2">
                  <button className="px-3 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200" value={list.action[0]}>
                    {list.action[0]}
                  </button>
                  <button
                      onClick={() => handleMarkAsPaid(list)}
                      className="px-3 py-1 text-xs rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    >
                      Mark as Paids
                    </button>
                  {/* <button className="px-3 py-1 text-xs rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    {list.action[1]}
                  </button> */}
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
          </table>
        </div>

      </div>

      <MarkPaidModal
        isOpen={showPaidModal}
        invoice={selectedInvoice}
        onClose={() => {
          setShowPaidModal(false);
          setSelectedInvoice(null);
        }}
        feeTypes={feeTypes}
      />

    </>
}

const MarkPaidModal = ({ isOpen, invoice, onClose ,feeTypes}) => {
  
  const [formData , setFormData] = useState();
   const formHandler = (e) => {
    e.preventDefault();
      setFormData({
          ...formData,
          [e.target.name]:e.target.name
        })

        console.log(formData);
  }

  if (!isOpen || !invoice) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">

        <h3 className="text-lg font-semibold mb-4">
          Mark Invoice as Paid
        </h3>
        <form onSubmit={(e) => {
          formHandler(e)
        }  }>
          <input type="hidden" value={invoice.user_id} name="user_id"/>
          {/* Fee Type */}
          <div className="mb-3">
            <label className="block font-medium mb-1">Fee Type</label>
                <select
                    name="feeType"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
                >
                    {feeTypes.length > 0 &&
                    feeTypes.map((list) => (
                        <option key={list.id} value={list.id}>
                        {list.name}
                        </option>
                    ))}
                </select>
          </div>

          {/* Paid Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Paid Amount</label>
            <input
              type="number"
              defaultValue={invoice.fee_type_amount}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Confirm Paid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default InvoiceTable;